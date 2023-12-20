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
  name: yup.string().required('Fill the name field'),
  email: yup.string().required('Fill the email field').email(),
  password: yup
    .string()
    .required('Fill the password field')
    .matches(/.{6,}/, 'You password must have at least 6 characters'),
  confirmPassword: yup
    .string()
    .required('Fill the confirm password field')
    .oneOf([yup.ref('password')], 'Confirm your password'),
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
        textFieldInputProps={{
          label: 'Name',
          type: 'text',
          ...register('name'),
        }}
        message={errors.name?.message}
      />
      <Input
        textFieldInputProps={{
          label: 'Email',
          type: 'text',
          ...register('email'),
        }}
        message={errors.email?.message}
      />
      <Input
        textFieldInputProps={{
          label: 'Password',
          type: 'password',
          ...register('password'),
        }}
        message={errors.password?.message}
      />
      <Input
        textFieldInputProps={{
          label: 'Confirmar password',
          type: 'password',
          ...register('confirmPassword'),
        }}
        message={errors.confirmPassword?.message}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Register
      </StyledButton>
    </StyledForm>
  );
};
export default RegisterForm;
