import { useState, useEffect, Suspense } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "service/api-service";
import { IResponseById } from "interfaces";
import Spinner from "components/Spinner/Spinner";
import MovieDetails from "components/MovieDetails/MovieDetails";
import GoBackLink from "components/GoBackLink/GoBackLink";
import ErrorPoster from "components/ErrorPoster/ErrorPoster";

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
        .catch((e) => setError(e))
        .finally(() => setIsLoading(false));
    }
  }, [movieId]);



  return (
    <div>
      <GoBackLink/>
      {data && <MovieDetails data={data} />}
      {error && <ErrorPoster />}
      {isLoading && <Spinner />}
      <div style={{display:"flex",flexDirection:"column", gap:"8px"}}>
        <NavLink to="cast">Актори</NavLink>
        <NavLink to="reviews">Огляди/відгуки</NavLink>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
