export interface IMovie {
    id: number,
    title: string,
    poster_path: string,
    genre_ids: number[],
    vote_average:number,
    
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
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: {
            logo_path:string,
            name: string,
            origin_country:string
        }[],
    release_date:Date,
    revenue: number,
    runtime: number,
    vote_average: number,
    vote_count: number
}
