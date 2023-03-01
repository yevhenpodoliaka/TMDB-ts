import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

import { FiLogIn } from 'react-icons/fi';

const AuthNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? (
        <button>
          <FiLogIn fontSize="14px" />
          Вийти
        </button>
      ) : (
        <div className={style.authNav}>
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
