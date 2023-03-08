import styles from "./AuthNav.module.css"
import Button from 'components/Button/Button';
import { useAuthUserContext } from 'hooks/useAuthUserContext';
import { FiLogIn } from 'react-icons/fi';

const UserMenu = () => {
  const { logOut, userName } = useAuthUserContext();
  console.log(userName);
    return (
      <div className={styles.userMenu}>
        <p className={styles.userName}>{userName}</p>
        <Button onClick={logOut} aria-label="logout button" type="button">
          <FiLogIn fontSize="14px" />
          Вийти
        </Button>
      </div>
    );


};

export default UserMenu;
