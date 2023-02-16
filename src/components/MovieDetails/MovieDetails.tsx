import style from "./MovieDetails.module.css"
import { IResponseById } from "interfaces/index";

interface IProps {
data:{backdrop_path: string,
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
    vote_count: number}
}


const MovieDetails = ({
data
}:IProps) => {
const{
  budget,
  genres,
  homepage,
  original_title,
  overview,
  popularity,
  poster_path,
  production_companies,
  // release_date,
  revenue,
  runtime,
  vote_average,
  vote_count}=data
  return (
 <div className={style.card}>
        <div className={style.posterWrap}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=" movies poster"
          />
          <div className={style.companiesWrap}>
              {production_companies.map(({logo_path,name,origin_country})=>{
                  return <div >
                    <img  src={`https://image.tmdb.org/t/p/w500/${logo_path}`}alt=" movies poster"/>
                  <p>{name} ,{origin_country} </p>
                  </div>})} 
        </div>
        </div>
        <div className={style.descriptionWrap}>
          <p>title: {original_title}</p>
          <p>{genres.map((i) => <span>{i.name}</span>).join(" , ")}</p>
          {/* <p>release date: {release_date}</p> */}
          <p>vote count{vote_count}</p>
          <p>rating {vote_average}</p>
          <p>revenue {revenue}$</p>
          <p>popularity {popularity}</p>
          <p>homepage {homepage}</p>
          <p>runtime {runtime}</p>
          <p>budget {budget}$</p>
          <p>About :{overview}</p>
        </div>
      </div>
  );
};

export default MovieDetails;
