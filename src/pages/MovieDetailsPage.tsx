import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "service/api-service";
import { IResponseById } from "interfaces";
import MovieDetails from "components/MovieDetails/MovieDetails";

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
      <MovieDetails data={data} />
    </div>
  );
};

export default MovieDetailsPage;
