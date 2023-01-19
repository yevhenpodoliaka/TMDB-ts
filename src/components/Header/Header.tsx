import style from "./Header.module.css"
import { FiFilm } from "react-icons/fi"
import SearchBar from "../SearchBar/SearchBar"

type Props = {
    onSubmit:(query:string)=>void
}
const Header = ({onSubmit}:Props) => {
    return <header className={style.header}>
        <div className={style.logo}>
            <FiFilm fontSize={30} color="white"/>
            <span className={style.logoText}>Filmoteka</span>
        </div>
        <SearchBar onSubmit={onSubmit}/>
    </header>
}
export default Header