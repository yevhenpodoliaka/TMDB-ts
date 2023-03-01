import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useParams, Link } from 'react-router-dom';
import logoImg from 'images/logo.svg';
import SearchOptions from 'components/SearchOptions/SearchOptions';
import AuthNav from 'components/AuthNav/AuthNav';
import SiteNav from '../SiteNav/SiteNav';

const Header = () => {
  const { movieId } = useParams();

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link to="/?page=1">
          <img className={styles.logo} src={logoImg} alt="logo" />
        </Link>
        <nav className={styles.nav}>
          <SiteNav />
          <AuthNav />
        </nav>
      </div>

      {!movieId && <SearchBar />}
      {!movieId && <SearchOptions />}
    </header>
  );
};

export default Header;
