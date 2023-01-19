import defaultPoster from '../../images/no-poster.jpg';
import style from "./GalleryItem.module.css"
type Props = {
  title :string,
  poster_path:string
}

const GalleryItem = ({  title, poster_path }: Props) => {
     const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
  return (
    <li className={style.galleryItem}>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </li>
  )
}

export default GalleryItem


