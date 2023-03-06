import React, { createContext, useState } from 'react';
import { IAuthUserContext } from 'interfaces/contextInterfaces';
import useLocalStorage from 'hooks/useLocalStorage';
const initialContext = {
isLoggedIn: false,
username: "",
  logIn: (name: string, token: string) => {},
  logOut: () => {},
  userToken: "",
}
export const authUserContext = createContext<IAuthUserContext>(initialContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userToken, setUserToken] = useLocalStorage('token', '');

  const logIn = (name: string, token: string) => {
    setIsLoggedIn(true);
    setUsername(name);
    setUserToken(token);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername('');
    setUserToken('');
  };

  return (
    <authUserContext.Provider
      value={{ isLoggedIn, username, logIn, logOut, userToken, }}
    >
      {children}
    </authUserContext.Provider>
  );
};

export default AuthContextProvider;
