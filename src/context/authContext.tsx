import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { API } from '../services/api';
import { ILoginProps, IUser } from '../types/interfaces';

interface AuthContextInterface {
  isAuthenticated: boolean;
  token: string | undefined;
  user: IUser | undefined;
  Login: ({ email, password }: ILoginProps) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextInterface);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | undefined>();
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    const tokenSessionStorage = sessionStorage.getItem('boilerplate.token');
    const userSessionStorage = sessionStorage.getItem('boilerplate.user');

    if (userSessionStorage && tokenSessionStorage) {
      setIsAuthenticated(true);
      setToken(tokenSessionStorage);
      setUser(JSON.parse(userSessionStorage));
    } else {
      setIsAuthenticated(false);
      setToken(undefined);
      setUser(undefined);
    }
  }, []);

  async function Login({ email, password }: ILoginProps) {
    try {
      const result = await API.post('/user/login', {
        email,
        password,
      });

      if (result.status !== 200) {
        return toast.error(result.data.error, {
          autoClose: 4000,
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const data = result.data.result;
        console.log(data);
        sessionStorage.setItem('boilerplate.token', data.authGuidToken.token);
        sessionStorage.setItem(
          'boilerplate.user',
          JSON.stringify({
            email: data.email,
            name: data.name,
          }),
        );
        setIsAuthenticated(true);
        setToken(data.authGuidToken.token);
        setUser({
          email: data.email,
          name: data.name,
        });

        toast.success('Login successfully !', {
          autoClose: 4000,
          position: toast.POSITION.TOP_RIGHT,
        });

        return;
      }
    } catch (error: any) {
      console.log(`catch => `, error);
      const status = error.response.status;
      if (status === 422 || status === 403) {
        return toast.error(error.response.data.error, {
          autoClose: 4000,
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        return toast.error('An error has occurred, please try again !', {
          autoClose: 4000,
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, Login }}>
      {children}
    </AuthContext.Provider>
  );
}
