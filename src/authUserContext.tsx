import React, { createContext, useState,useCallback ,memo} from 'react';
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

  const logIn =useCallback((name: string, token: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setUserToken(token);
  },[setUserToken]) 

  const logOut =useCallback(() => {
    setIsLoggedIn(false);
    setUserName('');
    setUserToken('');
  }, [setUserToken]) 
  
  const refreshUser =useCallback((name: string) => {
    setIsLoggedIn(true);
    if (name) {
       setUserName(name);
    }
   
  },[]) 
  return (
    <authUserContext.Provider
      value={{ isLoggedIn, userName, logIn, logOut, userToken, refreshUser }}
    >
      {children}
    </authUserContext.Provider>
  );
};

export default memo(AuthContextProvider);
