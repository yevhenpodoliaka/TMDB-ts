import styles from './MovieReviews.module.css';
import { IReview } from 'interfaces/movieInterfaces';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api-service';
import MovieReviewsItem from './MovieReviewsItem';

const MovieReviews = () => {
  const [error, setError] = useState<Error>();
  const [reviews, setReviews] = useState<IReview[]>();
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      fetchReviews(movieId)
        .then(res => setReviews(res.results))
        .catch(setError);
    }
  }, [movieId]);
  return (
    <>
      {error && <p>винткла помилка при загрузці даних</p>}
      {reviews?.length === 0 ? (
        <p>Нажаль ми не маємо відгуків/оглядів про цей фільм</p>
      ) : (
        <ul className={styles.reviewsList}>
          {reviews?.map(({ id, author, content }) => {
            return (
              <MovieReviewsItem key={id} author={author} content={content} />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
