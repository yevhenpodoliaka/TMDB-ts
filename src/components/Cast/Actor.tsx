import defaultPoster from 'images/no-poster.jpg';
import styles from './Cast.module.css';
export interface IActor {
  id?: number;
  character: string;
  name: string;
  profile_path: string;
}

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
