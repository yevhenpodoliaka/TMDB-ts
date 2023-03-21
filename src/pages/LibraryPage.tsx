import { useEffect, useMemo, useState } from "react";
import { IResponseById, ISavedMovie } from "interfaces/movieInterfaces";
import { fetchMovieById } from "service/api-service";
import Gallery from "components/Gallery/Gallery";
import Spinner from "components/Spinner/Spinner";
import ErrorPoster from "components/ErrorPoster/ErrorPoster";

const LibraryPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>();
  const [movies, setMovies] = useState<IResponseById[]>()

  const savedMovies:ISavedMovie[] = useMemo(() => {
     try {
       return (JSON.parse(localStorage.getItem('savedMovies') || ''));
     } catch (error) {
      return []
     }
 },[])

  useEffect(() => {
    if (savedMovies.length > 0) {
      setIsLoading(true);
      const request:Promise<IResponseById>[] = savedMovies.map(i => fetchMovieById(i.movieId));
      Promise.all(request)
        .then(data => setMovies(data))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }

  },[savedMovies])

  return (
    <>
      {error && <ErrorPoster />}
      {movies && !isLoading && <Gallery movies={movies} />}

      {isLoading && <Spinner />}
      {savedMovies?.length===0&& <h1 style={{textAlign:"center"}}>Ви ще не маєте збережених фільмів</h1>}
    </>
  );
}
export default LibraryPage
