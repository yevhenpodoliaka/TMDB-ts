import style from "./MovieDetails.module.css";
import defaultPoster from "images/no-poster.jpg";
import { IResponseById } from "interfaces";
import MoviesCompany from "./MoviesCompany";

interface IProps {
  data: IResponseById;
}

const MovieDetails = ({ data }: IProps) => {
  const {
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
    vote_count,
  } = data;

  console.log(genres);
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;

  return (
    <div className={style.card}>
      <div className={style.posterWrap}>
        <img src={posterUrl} alt=" movies poster" />
      </div>
      <div className={style.descriptionWrap}>
        <p>title: {original_title}</p>
        <p>{genres?.map((i) =>i.name).join(" , ")}</p>
        {/* <p>release date: {release_date}</p> */}
        <p>vote count{vote_count}</p>
        <p>rating {vote_average}</p>
        <p>revenue {revenue}$</p>
        <p>popularity {popularity}</p>
        <p>homepage {homepage}</p>
        <p>runtime {runtime}</p>
        <p>budget {budget}$</p>
        <p>About :{overview}</p>
        <MoviesCompany production_companies={production_companies} />
      </div>
    </div>
  );
};

export default MovieDetails;
