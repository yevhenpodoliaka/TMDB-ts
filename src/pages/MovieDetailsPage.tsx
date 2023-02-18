import { useState, useEffect, Suspense } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "service/api-service";
import { IResponseById } from "interfaces";
import MovieDetails from "components/MovieDetails/MovieDetails";
import GoBackLink from "components/GoBackLink/GoBackLink";

const MovieDetailsPage = () => {
  const [data, setData] = useState<IResponseById | null>(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      fetchMovieById(movieId).then(setData).catch(console.log);
    }
  }, [movieId]);

  if (!data) {
    return null;
  }

  return (
    <div>
      <GoBackLink/>
      <MovieDetails data={data} />
      <div style={{display:"flex",flexDirection:"column", gap:"8px"}}>
        <NavLink to="cast">cast</NavLink>
        <NavLink to="reviews">reviews</NavLink>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
