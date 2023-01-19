const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';



export  async function fetchTrendingMovies<T>( page:number):Promise<T> {
 const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=uk-UA&page=${page}`
  const response = await fetch(url);
  const data = await response.json();
  return data ;
}

export  async function fetchQueryMovies<T>(query: string, page: number):Promise<T> {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=uk-UA&page=${page}`

  const response = await fetch(url);
  const data = await response.json();
  return data ;
}
  