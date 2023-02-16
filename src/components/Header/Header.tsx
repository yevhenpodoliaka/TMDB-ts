import style from "./Header.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { useParams ,Link} from "react-router-dom";
import logoImg from "images/logo.svg"

const Header = () => {

    const { movieId } = useParams();
 
    return <header className={style.header}>
        <Link className={style.logo} to="/">
            <img className={style.logo} src={logoImg} alt="logo"  />
        </Link>
        {!movieId && <SearchBar/>}
    </header>
}

export default Header