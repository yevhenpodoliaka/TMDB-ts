import styles from "./AuthNav.module.css"
import Button from 'components/Button/Button';
import { FiLogIn } from 'react-icons/fi';
import { logOut } from "service/auth-service";
import useUserContext from "hooks/useUserContext";

const UserMenu = () => {
  const { userName, logOutUser } = useUserContext();
  //TODO handleClick=>error

  const handleClick = () => {
    logOut()
      .then(() => logOutUser())
      .catch(console.log);
  };
  return (
    <div className={styles.userMenu}>
      <p className={styles.userName}>{userName}</p>
      <Button onClick={handleClick} aria-label="logout button" type="button">
        <FiLogIn fontSize="14px" />
        Вийти
      </Button>
    </div>
  );
};

export default UserMenu;
