const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';



export  async function fetchTrendingMovies<T>( page:number):Promise<T> {
 const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=uk-UA&page=${page}`
  const response = await fetch(url);
  const data = await response.json();
  return data ;
}

// export  async function fetchQueryMovies<T>(query: string, page: number=1):Promise<T> {
//  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=uk-UA&page=${page}`
//   const response = await fetch(url);
//   const data = await response.json();
//   return data ;
// }
