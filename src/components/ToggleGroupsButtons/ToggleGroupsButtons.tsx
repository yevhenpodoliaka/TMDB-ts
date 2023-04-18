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
  const { isLoggedIn } = useUserContext();
  const currentMovie: ISavedMovie | undefined = useMemo(() => {
    return savedMovies.find(i => i.movieId === movieId);
  }, [movieId, savedMovies]);

  const add = async (movieId: string, group: string) => {
    setIsLoading(true);
    try {
      const data = await addMovie(movieId, group);
      if (data) setSavedMovies(data.movies);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
    const remove = async ( _id: string) => {
      setIsLoading(true);
      try {
        const data = await removeMovie(_id);
        if (data) setSavedMovies(data.movies);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
  };
      const update = async ( _id:string, group: string) => {
      setIsLoading(true);
      try {
        const data = await updateMovie( _id, group);
        if (data) setSavedMovies(data.movies);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoggedIn) {
      alert('Для користування бібліотекою Ви маєте увійти в обліковий запис');
      return;
    }
    const group = e.currentTarget.dataset.group;
    if (!currentMovie && movieId && group) {
      await add(movieId.toString(), group);
    }
    if (currentMovie && e.currentTarget.dataset.group === currentMovie.group) {
      await remove(currentMovie._id);
    }

    if (
      group &&
      currentMovie &&
      e.currentTarget.dataset.group !== currentMovie.group
    ) {
      await update(currentMovie._id, group)
    };
  }
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
          ? 'Улюблене'
          : 'Додати до улюбленого'}
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
        {currentMovie?.group === 'queued' ? 'В черзі' : 'Додати до черги'}
      </button>
    </div>
  );
};

export default ToggleGroupsButton;
