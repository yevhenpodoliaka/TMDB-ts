import defaultPoster from 'images/no-poster.jpg';
import { IActor } from 'interfaces/movieInterfaces';
import styles from './Cast.module.css';

const Actor = ({ character, name, profile_path }: IActor) => {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : `${defaultPoster}`;
  return (
    <li className={styles.castItem}>
      <img src={imageUrl} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{character}</p>
    </li>
  );
};
export default Actor;
