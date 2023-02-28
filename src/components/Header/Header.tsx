import style from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useParams, Link, NavLink } from 'react-router-dom';
import logoImg from 'images/logo.svg';
import SearchOptions from 'components/SearchOptions/SearchOptions';
import {AiFillHome}from "react-icons/ai"
import AuthNav from 'components/AuthNav/AuthNav';

const Header = () => {
  const { movieId } = useParams();

  return (
    <header className={style.header}>
       <div className={style.navContainer}>
      <Link to="/?page=1">
        <img className={style.logo} src={logoImg} alt="logo" />
      </Link>
     
        <nav>
      <AuthNav/>
      <NavLink className="navLink" to="/"><AiFillHome/></NavLink>
      <NavLink className="navLink" to="library">бібліотека</NavLink>
      </nav>
      </div>
  
   {!movieId && <SearchBar />}
        {!movieId && <SearchOptions />} 

      </header>
  
  );
};

export default Header;
