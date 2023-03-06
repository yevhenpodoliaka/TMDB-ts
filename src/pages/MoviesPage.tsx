import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  fetchTrendingMovies,
  fetchQueryMovies,
  fetchDiscoverMovies,
} from 'service/api-service';
import { IMovie } from 'interfaces/movieInterfaces';
import Gallery from 'components/Gallery/Gallery';
import PagesOptionButtons from 'components/PagesOptionButtons/PagesOptionButtons';
import NotResultPoster from 'components/NotResultPoster/NotResultPoster';
import ErrorPoster from 'components/ErrorPoster/ErrorPoster';
import Spinner from 'components/Spinner/Spinner';
import genresFormatter from 'helpers/genresFormatter';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResult, setTotalResult] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page, query, year, genre } = params;

  // console.log(page, query, year, genre )

  useEffect(() => {
    // console.log("useEffect")

    setIsLoading(true);
    if (genre || year) {
      //  console.log("useEffect if year/genres")
      const genreValue = genresFormatter(genre);
      fetchDiscoverMovies(Number(page), year, genreValue)
        .then(({ results, total_pages, total_results }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results);
        })
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
    if (page && !year && !genre && !query) {
      //  console.log("useEffect if trending")
      fetchTrendingMovies(Number(page))
        .then(({ results, total_pages, total_results }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results);
        })
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
    if (query && !year && !genre) {
      //  console.log("useEffect if query")
      fetchQueryMovies(query, Number(page))
        .then(({ results, total_pages, total_results }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results);
        })
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
  }, [genre, page, params, query, setSearchParams, year]);

  return (
    <>
      {error && <ErrorPoster />}
      {totalResult < 1 ? (
        <NotResultPoster text={query} />
      ) : (
        <Gallery movies={movies} />
      )}
      {isLoading && <Spinner />}
      {totalPages > 1 && <PagesOptionButtons totalPages={totalPages} />}
    </>
  );
};

export default MoviesPage;
