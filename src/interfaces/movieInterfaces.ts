export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  genre_ids?: number[]; //- props для сторiнки MoviesPage
  genres?: { id: number; name: string }[]; // - для сторiнки LibraryPage
  vote_average: number;
}


export interface ISavedMovie {
  movieId: string;
  group: 'favorites' | 'watched' | 'queued';
  _id: string;
}

export interface IResponse {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}

export interface IResponseById{
    backdrop_path: string,
    budget: number,
    genres: {id:number,name:string}[],
    homepage:string,
    id: number,
    title:string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: {
            logo_path:string,
            name: string,
            origin_country:string
        }[],
    release_date:string,
    revenue: number,
    runtime: number,
    vote_average: number,
    vote_count: number
    videos: {
        results: {
            key:string
        }[]
    }
}










