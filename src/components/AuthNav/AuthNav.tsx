import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import { FiLogIn } from 'react-icons/fi';
import UserMenu from './UserMenu';
import { useAuthUserContext } from 'hooks/useAuthUserContext';

const AuthNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuthUserContext();

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className={styles.authNav}>
          <FiLogIn
            fontSize="14px"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: 'blue' }}
          />

          {isOpen && (
            <>
              <NavLink className="navLink" to="login">
                Login
              </NavLink>
              <NavLink className="navLink" to="register">
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthNav;
