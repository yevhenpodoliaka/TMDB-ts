import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingMovies, fetchQueryMovies } from "service/api-service";
import { IMovie } from "interfaces";
import Gallery from "components/Gallery/Gallery";

const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [searchParams, setSearchParams] = useSearchParams({page:"1"});



  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page, query } = params;

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
  }, [page, params, query, setSearchParams]);
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

export default MoviesPage;
