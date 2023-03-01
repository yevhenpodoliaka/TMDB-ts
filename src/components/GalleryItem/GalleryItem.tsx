import defaultPoster from 'images/no-poster.jpg';
import styles from './GalleryItem.module.css';
import genresList from 'genresUa.json';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { IMovie } from 'interfaces';

const GalleryItem = ({
  id,
  title,
  poster_path,
  vote_average,
  genre_ids,
  release_date,
}: IMovie) => {
  const location = useLocation();

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;

  const movieGenres = genresList.genres
    .filter(i => genre_ids.includes(i.id))
    .map(({ name }) => name)
    .join(', ');

  const year = release_date.slice(0, 4);
  return (
    <li className={styles.galleryItem}>
      <Link
        className={styles.linkWrap}
        to={`/movie/${id}`}
        state={{ from: location }}
      >
        <div className={styles.imgSkeleton}>
          <img src={imageUrl} alt={title} />
        </div>

        <p className={styles.title}>{title}</p>
        {vote_average > 0 && (
          <span className={styles.rating}> {vote_average.toFixed(2)}</span>
        )}
        <p className={styles.genres}>
          {movieGenres}, {year}
        </p>
      </Link>
    </li>
  );
};

export default GalleryItem;
