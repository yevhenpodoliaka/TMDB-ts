import style from "./Header.module.css"
import { FiFilm } from "react-icons/fi"
import SearchBar from "../SearchBar/SearchBar"
import { useParams } from "react-router-dom";

const Header = () => {

    const { movieId } = useParams();
 
    return <header className={style.header}>
        <div className={style.logo}>
            <FiFilm fontSize={30} color="white"/>
            <span className={style.logoText}>Filmoteka</span>
        </div>
        {!movieId && <SearchBar/>}
    </header>
}

export default Header