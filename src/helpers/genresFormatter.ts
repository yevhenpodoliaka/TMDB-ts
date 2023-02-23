import data from "../genresUa.json"
const genresFormatter = (genre: string): number|undefined => {
    const genresList = data.genres
    const res= genresList.find(i=>i.name=== genre)
    return res?.id
}

export default genresFormatter