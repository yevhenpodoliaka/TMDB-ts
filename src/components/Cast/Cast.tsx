import styles from './Cast.module.css';
import { fetchCast } from 'service/api-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actor from './Actor';
import { IActor } from 'interfaces/movieInterfaces';

const Cast = () => {
  const [error, setError] = useState<Error>();
  const [cast, setCast] = useState<IActor[]>();
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      fetchCast(movieId)
        .then(res => setCast(res.cast))
        .catch(setError);
    }
  }, [movieId]);

  return (
    <>
      {error && <p>винткла помилка при загрузці даних</p>}
      {cast?.length === 0 ? (
        <p>Нажаль ми не маємо інформації щодо акторського складу</p>
      ) : (
        <ul className={styles.cast}>
          {cast?.map(({ id, character, name, profile_path }) => {
            return (
              <Actor
                key={id}
                character={character}
                name={name}
                profile_path={profile_path}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
