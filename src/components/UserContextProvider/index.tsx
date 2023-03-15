import { createContext, useState ,useCallback} from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { IUserContext } from 'interfaces/authContextInterfaces';
import { IUserData } from 'interfaces/authContextInterfaces';

const initUserContext: IUserContext = {
  isLoggedIn: false,
  userData: { name: '' },
  token: '',
  logInUser: () => {},
  logOutUser: () => {},
};
const initUserDataState = { name: '' };

export const UserContext = createContext(initUserContext);

const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useLocalStorage('token','');
    const [userData, setUserData] = useState(initUserDataState);

  const logInUser = useCallback((dataUser: IUserData, token: string) => {
    setIsLoggedIn(true);
    setUserData(prevState => ({ ...prevState, name:dataUser.name }));
    setToken(token);
  },[setToken])
  const logOutUser = () => {
      setIsLoggedIn(false);
      setToken("")
    setUserData(initUserDataState);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, userData, logInUser, logOutUser,token }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
