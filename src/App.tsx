import { useState,useEffect } from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import './App.css';
import { fetchTrendingMovies } from './service/api-service';
import { movieType,responseType } from './types';

function App():JSX.Element {
  const [movies, setMovies] = useState<Array<movieType>>([])
  // const [query, setQuery] = useState<string>("")
  // const [page, setPage] = useState(1)

  useEffect(() => {
    fetchTrendingMovies<responseType>(1)
      .then(({ results }) => setMovies(results))
      .catch(console.log)

    
  },[])

  return (
    <div className="App">
        <Header/>
        <Gallery movies={movies}/>
    </div>
  );
}

export default App;
