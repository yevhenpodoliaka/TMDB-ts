import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const SiteNav = () => {
  return (
    <>
      <NavLink className="navLink" to="/?page=1">
        <AiFillHome fontSize="14px" />
      </NavLink>
      <NavLink className="navLink" to="library">
        бібліотека
      </NavLink>
    </>
  );
};

export default SiteNav;
