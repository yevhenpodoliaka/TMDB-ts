import style from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useParams, Link } from 'react-router-dom';
import logoImg from 'images/logo.svg';
import SearchOptions from 'components/SearchOptions/SearchOptions';

const Header = () => {
  const { movieId } = useParams();

  return (
    <header className={style.header}>
      <Link className={style.logo} to="/?page=1">
        <img className={style.logo} src={logoImg} alt="logo" />
      </Link>
      {!movieId && <SearchBar />}
      {!movieId && <SearchOptions />}
    </header>
  );
};

export default Header;
