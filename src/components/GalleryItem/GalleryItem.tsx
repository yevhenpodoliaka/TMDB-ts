import defaultPoster from "images/no-poster.jpg";
import style from "./GalleryItem.module.css";
import genresList from "genresUa.json";
// import { movieType } from '../../types';
type Props = {
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
};

const GalleryItem = ({
  title,
  poster_path,
  vote_average,
  genre_ids,
}: Props) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;

  const movieGenres = genresList.genres
    .filter((i) => genre_ids.includes(i.id))
    .map(({ name }) => name)
    .join(" , ");

  return (
    <li className={style.galleryItem}>
      <img src={imageUrl} alt={title} />
      <p className={style.title}>{title}</p>
     {vote_average>0 && <span className={style.rating}> { vote_average.toFixed(2) }</span>}
      <p className={style.genres}>{movieGenres}</p>
    </li>
  );
};

export default GalleryItem;
