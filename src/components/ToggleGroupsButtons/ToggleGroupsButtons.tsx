import styles from './ToggleGroupButtons.module.css';
import useLocalStorage from 'hooks/useLocalStorage';
import { ISavedMovie } from 'interfaces/movieInterfaces';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addMovie, removeMovie, updateMovie } from 'service/db-api-service';
import useUserContext from 'hooks/useUserContext';
// group:"watched"|"favorites"|"queued"
const ToggleGroupsButton = () => {
  const [savedMovies, setSavedMovies] = useLocalStorage<ISavedMovie[]>(
    'savedMovies',
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const {isLoggedIn}=useUserContext()
  const currentMovie: ISavedMovie | undefined = useMemo(() => {
    return savedMovies.find(i => i.movieId === movieId);
  }, [movieId, savedMovies]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoggedIn) {
      alert("Для користування бібліотекою Ви маєте увійти в обліковий запис")
      return
    }
    const group = e.currentTarget.dataset.group;
    if (!currentMovie && movieId && group) {
      setIsLoading(true);
      addMovie(movieId?.toString(), group)
        .then(data => {
          if (data) setSavedMovies(data.movies);
        })
        .catch(e => console.log(e))
        .finally(() => setIsLoading(false));
    }
    if (currentMovie && e.currentTarget.dataset.group === currentMovie?.group) {
      setIsLoading(true);
      removeMovie(currentMovie._id)
        .then(data => {
          if (data) setSavedMovies(data.movies);
        })
        .catch(e => console.log(e))
        .finally(() => setIsLoading(false));
    }

    if (
      group &&
      currentMovie &&
      e.currentTarget.dataset.group !== currentMovie?.group
    ) {
      setIsLoading(true);
      updateMovie(currentMovie._id, group)
        .then(data => {
          if (data) setSavedMovies(data.movies);
        })
        .catch(e => console.log(e))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className={styles.wrap}>
      <button
        className={`${styles.button} ${
          currentMovie?.group === 'favorites' ? styles.isActive : ''
        }`}
        type="button"
        data-group="favorites"
        onClick={handleClick}
        disabled={isLoading}
      >
        {currentMovie?.group === 'favorites'
          ? "Улюблене"
          : "Додати до улюбленого"}
      </button>
      <button
        className={`${styles.button} ${
          currentMovie?.group === 'watched' ? styles.isActive : ''
        }`}
        type="button"
        data-group="watched"
        onClick={handleClick}
        disabled={isLoading}
      >
        {currentMovie?.group === 'watched'
          ? 'Переглянуте'
          : 'Додати до переглянутого'}
      </button>
      <button
        className={`${styles.button} ${
          currentMovie?.group === 'queued' ? styles.isActive : ''
        }`}
        type="button"
        data-group="queued"
        onClick={handleClick}
        disabled={isLoading}
      >
        {currentMovie?.group === 'queued'
          ? 'В черзі'
          : 'Додати до черги'}
      </button>
    </div>
  );
};

export default ToggleGroupsButton;
