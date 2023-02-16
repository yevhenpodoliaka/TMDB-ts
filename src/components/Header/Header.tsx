import style from "./Header.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { useParams } from "react-router-dom";
import logoImg from "images/logo.svg"

const Header = () => {

    const { movieId } = useParams();
 
    return <header className={style.header}>
        <div className={style.logo}>
            <img className={style.logo} src={logoImg} alt="logo"  />
        </div>
        {!movieId && <SearchBar/>}
    </header>
}

export default Header