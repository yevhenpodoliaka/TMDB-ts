import styles from './Gallery.module.css';
import { IMovie } from 'interfaces/movieInterfaces';
import GalleryItem from '../GalleryItem/GalleryItem';

type Props = {
  movies: IMovie[];
};

const Gallery = ({ movies = [] }: Props) => {
  return (
    <ul className={styles.gallery}>
      {movies.map(
        ({ id, title, poster_path, vote_average, genre_ids, release_date }) => (
          <GalleryItem
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
            vote_average={vote_average}
            genre_ids={genre_ids}
            release_date={release_date}
          />
        )
      )}
    </ul>
  );
};

export default Gallery;
