import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';

import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Preencha o campo do nome'),
  email: yup.string().required('Preencha o campo do email').email(),
  password: yup
    .string()
    .required('Preencha o campo da senha')
    .matches(/.{6,}/, 'Sua senha deve conter no mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Preencha o campo de confirmar senha')
    .oneOf([yup.ref('password')], 'Confirme sua senha'),
});

const RegisterForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(schema),
  });

  const { userRegister } = useContext(UserContext);

  const submitForm: SubmitHandler<iRegisterFormData> = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <Input
        type='text'
        message={errors.name?.message}
        label='Nome'
        {...register('name')}
      />
      <Input
        type='text'
        message={errors.email?.message}
        label='Email'
        {...register('email')}
      />
      <Input
        type='password'
        message={errors.password?.message}
        label='Senha'
        {...register('password')}
      />
      <Input
        type='password'
        message={errors.confirmPassword?.message}
        label='Confirmar Senha'
        {...register('confirmPassword')}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};
export default RegisterForm;
