import { createContext, useState ,useCallback} from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { IUserContext, ISavedMovie } from 'interfaces/authContextInterfaces';


const initUserContext: IUserContext = {
  isLoggedIn: false,
  userData: { name: '' ,movies:[]},
  token: '',
  logInUser: () => {},
  logOutUser: () => {},
};
const initUserDataState: { name: string; movies: ISavedMovie[] } = {
  name: '',
  movies: [],
};

export const UserContext = createContext(initUserContext);

const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useLocalStorage('token','');
    const [userData, setUserData] = useState(initUserDataState);

  const logInUser = useCallback(
    (name: string, movies: ISavedMovie[], token: string) => {
      setIsLoggedIn(true);
      setUserData({ name, movies});
      setToken(token);
    },
    [setToken]
  );
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
