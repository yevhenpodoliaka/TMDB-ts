import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  fetchTrendingMovies,
  fetchQueryMovies,
  fetchDiscoverMovies,
} from 'service/api-service';
import { IMovie } from 'interfaces';
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

  useEffect(() => {
    setIsLoading(true);
    if (genre || year) {
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
    if (!query || query.trim() === '') {
      fetchTrendingMovies(Number(page))
        .then(({ results, total_pages, total_results }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results);
        })
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
    if (query) {
      fetchQueryMovies(query, Number(page))
        .then(({ results, total_pages, total_results }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results);
        })
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
  }, [page, params, query, setSearchParams, year]);

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
