import style from "./MovieDetails.module.css";
import defaultPoster from "images/no-poster.jpg";
import { IResponseById } from "interfaces";


interface IProps {
  data: IResponseById;
}

const MovieDetails = ({ data }: IProps) => {
  const {
    budget,
    genres,
    homepage,
    title,
    original_title,
    overview,
    popularity,
    poster_path,
    // release_date,
    revenue,
    runtime,
    vote_average,
    vote_count,
  } = data;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;

  return (
    <div className={style.card}>
      <div className={style.posterWrap}>
        <img src={posterUrl} alt=" movies poster" />
      </div>
      <div className={style.descriptionWrap}>
       {title &&<h3>{title}</h3>}
       {original_title &&<p>{ original_title}</p>}
        <p>{genres?.map((i) =>i.name).join(" , ")}</p>
        {/* <p>release date: {release_date}</p> */}
       {vote_count>0 && <p>кількість голосів:<span className={style.value}>{vote_count}</span></p>}
       {vote_average>0&& <p>рейтинг <span className={style.value}>{vote_average}</span></p>}
       {revenue>0&& <p>дохід <span className={style.value}>{revenue}$</span></p>}
        {popularity>0&&<p>популярність: <span className={style.value}>{popularity}</span></p>}
       {homepage&& <p>офіційний сайт: <span className={style.value}>{homepage}</span></p>}
       {runtime>0&& <p>тривалість <span className={style.value}>{runtime} хв</span></p>}
       {budget>0 && <p>б'юджет <span className={style.value}>{budget}$</span></p>}
        {overview && <p>Опис :</p>}
        {overview &&<p className={style.value}>{overview}</p>}
      </div>
    </div>
  );
};

export default MovieDetails;
