import style from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useParams, Link } from 'react-router-dom';
import logoImg from 'images/logo.svg';
import SearchOptions from 'components/SearchOptions/SearchOptions';
// import {AiFillHome}from "react-icons/ai"
// import { FiLogIn } from 'react-icons/fi';

const Header = () => {
  const { movieId } = useParams();

  return (
    <header className={style.header}>
      <Link className={style.logoLink} to="/?page=1">
        <img className={style.logo} src={logoImg} alt="logo" />
      </Link>

      {/* <nav>
      <Link className={style.navLink} to="/"><AiFillHome/></Link>
      <Link className={style.navLink} to="/library">бібліотека</Link>
      <Link className={style.navLink} to="/login"><FiLogIn/></Link>
      </nav> */}

      {!movieId && <SearchBar />}
      {!movieId && <SearchOptions />}
    </header>
  );
};

export default Header;
