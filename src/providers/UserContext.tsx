import { toast } from 'react-toastify';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

interface iUser {
  id: string;
  name: string;
  email: string;
}

interface iUserContextProps {
  children: React.ReactNode;
}

export interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iUserContext {
  login: iUser | null;
  setLogin: React.Dispatch<React.SetStateAction<iUser | null>>;
  userRegister: (data: iRegisterData) => Promise<void>;
  userLogin: (data: iLoginData) => Promise<void>;
  userLogout: () => void;
}

export interface iDefaultErrorMessage {
  error: string;
}

export const token: string | null = localStorage.getItem('@TOKEN');

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [login, setLogin] = useState<iUser | null>(null);
  const navigate = useNavigate();

  const userRegister = async (data: iRegisterData) => {
    try {
      await api.post('/users', data);
      console.log(data);
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data);
    }
  };
  const userLogin = async (data: iLoginData) => {
    try {
      const response = await api.post('/login', data);

      setLogin(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);

      navigate('/shop');
    } catch (error: any) {
      toast.error(error.response?.data);
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  useEffect(() => {
    const autoLogin = async () => {
      if (token) {
        navigate('/shop');
      } else {
        window.localStorage.clear();
        navigate('/');
      }
    };
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, login, setLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
