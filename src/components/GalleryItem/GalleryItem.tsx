import defaultPoster from "images/no-poster.jpg";
import style from "./GalleryItem.module.css";
import genresList from "genresUa.json";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IMovie } from "interfaces";

// type Props = {
//   id: number;
//   title: string;
//   poster_path: string;
//   vote_average: number;
//   genre_ids: number[];
// };

const GalleryItem = ({
  id,
  title,
  poster_path,
  vote_average,
  genre_ids,
  release_date
}: IMovie) => {
  const location = useLocation();
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;

  const movieGenres = genresList.genres
    .filter((i) => genre_ids.includes(i.id))
    .map(({ name }) => name)
    .join(", ");
 
 const year= release_date.slice(0,4)
  return (
    <li className={style.galleryItem}>
      <Link
        className={style.linkWrap}
        to={`/movie/${id}`}
        state={{ from: location }}
      >
        <div className={style.imgSkeleton}>
          <img src={imageUrl} alt={title} />
        </div>     
  
        <p className={style.title}>{title}</p>
        {vote_average > 0 && (
          <span className={style.rating}> {vote_average.toFixed(2)}</span>
        )}
        <p className={style.genres}>{movieGenres}, {year}</p>
       
      </Link>
    </li>
  );
};

export default GalleryItem;
