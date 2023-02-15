import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingMovies, fetchQueryMovies } from "service/api-service";
import { IMovie } from "interfaces";
import Gallery from "components/Gallery/Gallery";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page = 1, query } = params;

  useEffect(() => {
    if (!query || query.trim() === "") {
      fetchTrendingMovies(Number(page))
        .then(({ results }) => setMovies(results))
        .catch(console.log);
    }
    if (query) {
      fetchQueryMovies(query, Number(page))
        .then(({ results }) => setMovies(results))
        .catch(console.log);
    }
  }, [page, query]);
  return (
    <>
      <Gallery movies={movies} />
      <button
        onClick={() =>
          setSearchParams({ ...params, page: (Number(page) + 1).toString() })
        }
      >
        next page
      </button>
    </>
  );
};

export default Movies;
