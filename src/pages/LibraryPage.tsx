import { useEffect,useState } from "react"
import { getAllMovies } from "service/db-api-service";
import { IResponseById, ISavedMovie } from "interfaces/movieInterfaces";
import { fetchMovieById } from "service/api-service";
import Gallery from "components/Gallery/Gallery";
import Spinner from "components/Spinner/Spinner";
import ErrorPoster from "components/ErrorPoster/ErrorPoster";

const LibraryPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>();
  const [savedMovies, setSavedMovies] = useState<ISavedMovie[]>()
  const [movies, setMovies] = useState<IResponseById[]>()

  
  useEffect(() => {
    setIsLoading(true)
    getAllMovies()
      .then(data => setSavedMovies(data?.movies))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));

  }, [])
  
  useEffect(() => {
    if (savedMovies && savedMovies.length > 0) {
setIsLoading(true);
      const request = savedMovies.map(i => fetchMovieById(i.movieId));
   
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
