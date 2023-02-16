import style from "./Gallery.module.css"
import { IMovie } from "interfaces"
import GalleryItem from "../GalleryItem/GalleryItem"


type Props = {
  movies:IMovie[]
}

const Gallery = ({movies=[]}:Props) => {

  return (
    <ul className={style.gallery}>

      {movies.map(({ id, title, poster_path,vote_average,genre_ids}) => <GalleryItem
        key={id}
        id={id}
        title={title}
        poster_path={poster_path}
        vote_average={vote_average}
        genre_ids={genre_ids} />)}
        
      </ul>
   
  )
}

export default Gallery