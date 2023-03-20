export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  genre_ids?: number[]; //- props для сторiнки MoviesPage
  genres?: { id: number; name: string }[]; // - для сторiнки LibraryPage
  vote_average: number;
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

export interface IAboutMovie {
  title: string;
  original_title: string;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_count: number;
  vote_average: number;
  revenue: number;
  homepage: string;
  runtime: number;
  budget: number;
  overview:string
}
export interface IActor{
    id?: number,
    character: string,
    name: string,
    profile_path: string
}
export interface ICast{
    cast: IActor[]
}
export interface IResponseReviews{
     results:IReview[]
}
export interface IReview{
    id?:string,
     author: string,
    author_details?: {
                name?: string,
                username?: string,
                avatar_path?: string,
                rating?: number
            },
            content: string,
            created_at?:Date,
}


export interface ISavedMovie {
  movieId: string;
  group: 'favorites' | 'watched' | 'queued';
  _id: string;
}


