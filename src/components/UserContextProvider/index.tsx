import { createContext, useState ,useCallback} from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { IUserContext } from 'interfaces/authContextInterfaces';


const initUserContext: IUserContext = {
  isLoggedIn: false,
  userName: '',
  token: '',
  logInUser: () => {},
  logOutUser: () => {},
};


export const UserContext = createContext(initUserContext);

const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token , setToken] = useLocalStorage<string>('token', '');
    const [userName, setUserName] = useState("");

  const logInUser = useCallback(
    (name: string, token: string) => {
      setIsLoggedIn(true);
      setUserName(name);
      setToken(token);
    },
    [setToken]
  );
  const logOutUser = () => {
      setIsLoggedIn(false);
      setToken("")
      setUserName("");
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, userName, logInUser, logOutUser,token }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
