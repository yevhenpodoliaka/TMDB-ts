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