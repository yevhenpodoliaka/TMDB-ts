import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import { fetchTrendingMovies, fetchQueryMovies } from "./service/api-service";
import { movieType, responseType } from "./types";

const App = () => {
  const [movies, setMovies] = useState<Array<movieType>>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);


  useEffect(() => {
    if (query.trim() !== "") {

        fetchQueryMovies<responseType>(query, page)
        .then(({ results }) => setMovies(results))
        .catch(console.log);
      
    }

    fetchTrendingMovies<responseType>(page)
      .then(({ results }) => setMovies(results))
      .catch(console.log);
    
  }, [query, page]);

  return (
    <div className="App">
      <Header onSubmit={setQuery} />
      <Gallery movies={movies} />
    </div>
  );
};

export default App;
