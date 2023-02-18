import style from "./MovieReviews.module.css"
import { IReview } from 'interfaces';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api-service';
import MovieReviewsItem from './MovieReviewsItem';

const MovieReviews = () => {
   
  const [reviews, setReviews] = useState<IReview[]>();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchReviews(movieId!);
        await setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, [movieId]);
  return (
    <>
      {reviews?.length === 0 ? (
        <p>Нажаль ми не маємо відгуків/оглядів про цей фільм</p>
      ) : (
        <ul className={style.reviewslist }>
          {reviews?.map(({ id, author, content }) => {
            return (
              <MovieReviewsItem key={id} author={author} content={content} />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MovieReviews