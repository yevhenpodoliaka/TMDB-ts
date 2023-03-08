import styles from "./AuthNav.module.css"
import Button from 'components/Button/Button';
import { FiLogIn } from 'react-icons/fi';

const UserMenu = () => {
const userName="TEST USER"

    return (
      <div className={styles.userMenu}>
        <p className={styles.userName}>{userName}</p>
        <Button onClick={()=>console.log("logOut click")} aria-label="logout button" type="button">
          <FiLogIn fontSize="14px" />
          Вийти
        </Button>
      </div>
    );


};

export default UserMenu;
