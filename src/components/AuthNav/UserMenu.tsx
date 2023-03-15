import styles from "./AuthNav.module.css"
import Button from 'components/Button/Button';
import { FiLogIn } from 'react-icons/fi';
import useUserContext from "hooks/useUserContext";

const UserMenu = () => {
  const { userData ,logOutUser} = useUserContext()
  console.log(userData,"userMenu COMPONENT")
  const userName = userData.name
  
    return (
      <div className={styles.userMenu}>
        <p className={styles.userName}>{userName}</p>
        <Button
          onClick={() => logOutUser()}
          aria-label="logout button"
          type="button"
        >
          <FiLogIn fontSize="14px" />
          Вийти
        </Button>
      </div>
    );


};

export default UserMenu;
