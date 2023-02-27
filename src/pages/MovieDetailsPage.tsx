import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'service/api-service';
import { IResponseById } from 'interfaces';
import Spinner from 'components/Spinner/Spinner';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import ErrorPoster from 'components/ErrorPoster/ErrorPoster';

const MovieDetailsPage = () => {
  const [data, setData] = useState<IResponseById | null>(null);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    if (movieId) {
      fetchMovieById(movieId)
        .then(setData)
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
  }, [movieId]);

  return (
    <div>
      {data && <MovieDetails data={data} />}
      {error && <ErrorPoster />}
      {isLoading && <Spinner />}
    </div>
  );
};

export default MovieDetailsPage;
