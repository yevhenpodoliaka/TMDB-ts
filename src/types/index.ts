export type movieType = {
    id: number,
    title: string,
    poster_path:string,
}
export type responseType = {
    page: number,
    results: movieType[],
    total_pages: number,
    total_results: number
}