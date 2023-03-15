import { useContext } from 'react';
import { UserContext } from 'components/UserContextProvider';

const useUserContext = () => useContext(UserContext);

export default useUserContext;
