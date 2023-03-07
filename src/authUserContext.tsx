import React, { createContext, useState } from 'react';
import { IAuthUserContext } from 'interfaces/contextInterfaces';
import useLocalStorage from 'hooks/useLocalStorage';

const initialContext = {
  isLoggedIn: false,
  userName: '',
  logIn: (name: string, token: string) => {},
  logOut: () => {},
  userToken: '',
  refreshUser: (name: string) => {},
};

export const authUserContext = createContext<IAuthUserContext>(initialContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userToken, setUserToken] = useLocalStorage('token', '');

  const logIn = (name: string, token: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setUserToken(token);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserToken('');
  };
  const refreshUser = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
  };
  return (
    <authUserContext.Provider
      value={{ isLoggedIn, userName, logIn, logOut, userToken, refreshUser }}
    >
      {children}
    </authUserContext.Provider>
  );
};

export default AuthContextProvider;
