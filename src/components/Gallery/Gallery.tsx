import style from "./Gallery.module.css"
import { movieType } from "../../types"
import GalleryItem from "../GalleryItem/GalleryItem"

type Props = {
  movies:movieType[]
}

const Gallery = ({movies}:Props) => {

  return (
    <ul className={style.gallery}>

      {movies.map(({ id, title, poster_path }) => <GalleryItem
        key={id}
        title={title}
        poster_path={poster_path } />)}
        
    </ul>
  )
}

export default Gallery