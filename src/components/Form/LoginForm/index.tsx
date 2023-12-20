import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';

import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

interface iLoginFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('Preencha o campo do email').email(),
  password: yup.string().required('Preencha o campo da senha'),
});

const LoginForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(schema),
  });

  const { userLogin } = useContext(UserContext);

  const submitForm: SubmitHandler<iLoginFormData> = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <Input
        textFieldInputProps={{
          label: 'Name',
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
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Login
      </StyledButton>
    </StyledForm>
  );
};
export default LoginForm;
