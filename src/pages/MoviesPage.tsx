import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingMovies, fetchQueryMovies } from "service/api-service";
import { IMovie } from "interfaces";
import Gallery from "components/Gallery/Gallery";
import PagesOptionButtons from "components/PagesOptionButtons/PagesOptionButtons";
import NotResultPoster from "components/NotResultPoster/NotResultPoster";

const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [totalPages, setTotalPages] = useState(1)
  const [totalResult, setTotalResult] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page, query } = params;


  
  useEffect(() => {
    if (!query || query.trim() === "") {
      fetchTrendingMovies(Number(page))
        .then(({ results, total_pages, total_results
        }) => {
          setMovies(results);
          setTotalPages(total_pages);
          setTotalResult(total_results)
        })
        .catch(console.log);
    }
    if (query) {
      fetchQueryMovies(query, Number(page))
        .then(({ results,total_pages,total_results }) => {
          setMovies(results)
          setTotalPages(total_pages);
          setTotalResult(total_results)
        })
        .catch(console.log);
    }
  }, [page, params, query, setSearchParams]);

    console.log("totalResult", totalResult)
  return (
    <>
      {totalResult < 1 ?  <NotResultPoster text={query } />:<Gallery movies={movies} /> }
      
      <PagesOptionButtons totalPages={totalPages}  />
    </>
  );
};

export default MoviesPage;
