import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingMovies, fetchQueryMovies } from "service/api-service";
import { IMovie } from "interfaces";
import Gallery from "components/Gallery/Gallery";
import PagesOptionButtons from "components/PagesOptionButtons/PagesOptionButtons";
import NotResultPoster from "components/NotResultPoster/NotResultPoster";
import Spinner from "components/Spinner/Spinner";
// idle - запроса еще нет
// pending - пошел запрос
// resolved - успешный запрос
// rejected - запрос с ошибкой
// type TState = "idle"|"pending"|"resolved"|"rejected"

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResult, setTotalResult] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page, query } = params;

  useEffect(() => {
    setIsLoading(true)
    if (!query || query.trim() === "") {
      fetchTrendingMovies(Number(page))
        .then(({ results, total_pages, total_results }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results);
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }
    if (query) {
      fetchQueryMovies(query, Number(page))
        .then(({ results, total_pages, total_results }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results);
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }
  }, [page, params, query, setSearchParams]);

  return (
    <>
      {totalResult < 1 ? (
        <NotResultPoster text={query} />
      ) : (
        <Gallery movies={movies} />
      )}
      {isLoading && <Spinner />}
      <PagesOptionButtons totalPages={totalPages} />
    </>
  );
};

export default MoviesPage;
