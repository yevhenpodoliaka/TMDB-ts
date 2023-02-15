 import { useState, useEffect } from "react"
import { fetchTrendingMovies } from "service/api-service"
import { IMovie } from "interfaces"
import Gallery from "components/Gallery/Gallery"

const Movies = () => {
 const [movies, setMovies] = useState<IMovie[]>([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
      fetchTrendingMovies(page)
      .then(({ results }) => setMovies(results))
      .catch(console.log);
  },[page])
  return (
    <>
    <Gallery movies={movies} />
      <button onClick={()=>setPage(page+1)}>next page</button>
      
      </>
  )
}

export default Movies