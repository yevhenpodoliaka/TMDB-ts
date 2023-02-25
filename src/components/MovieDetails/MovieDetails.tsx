import style from './MovieDetails.module.css';
import defaultPoster from 'images/no-poster.jpg';
import { IResponseById } from 'interfaces';

interface IProps {
  data: IResponseById;
}

const MovieDetails = ({ data }: IProps) => {
  const {
    backdrop_path,
    budget,
    genres,
    homepage,
    title,
    original_title,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    vote_average,
    vote_count,
  } = data;
 
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
    
  return (
    <div
      className={style.card}
      style={{
        backgroundImage: `linear-gradient(to right,
           rgba(92, 142, 149, 0.6),
            rgba(156, 180, 203, 0.6)),
            url(${`https://image.tmdb.org/t/p/w500/${backdrop_path && backdrop_path}`})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className={style.posterWrap}>
        <img src={posterUrl} alt=" movies poster" />
      </div>
      <div className={style.descriptionWrap}>
        <table>
          {title && (
            <thead>
              <tr>
                <th>{title}</th>
              </tr>
            </thead>
          )}
          <tbody>
            {original_title && (
              <tr>
                <td>Оригінальна назва :</td>
                <td>{original_title}</td>
              </tr>
            )}
            {release_date && (
              <tr>
                <td>Дата релізу :</td>
                <td>{release_date}</td>
              </tr>
            )}
            {genres && (
              <tr>
                <td>Жанр :</td>
                <td>{<p>{genres?.map(i => i.name).join(' , ')}</p>}</td>
              </tr>
            )}
            {vote_count > 0 && (
              <tr>
                <td>Кількість голосів :</td>
                <td>{vote_count}</td>
              </tr>
            )}
            {vote_average > 0 && (
              <tr>
                <td>Рейтинг :</td>
                <td>{vote_average}</td>
              </tr>
            )}
            {revenue > 0 && (
              <tr>
                <td>Дохід :</td>
                <td>{revenue} $</td>
              </tr>
            )}
            {homepage && (
              <tr>
                <td>Сайт фільму :</td>
                <td>{homepage}</td>
              </tr>
            )}
            {runtime > 0 && (
              <tr>
                <td>Тривалість</td>
                <td>{runtime}хв</td>
              </tr>
            )}
            {budget > 0 && (
              <tr>
                <td>Б'юджет :</td>
                <td>{budget} $</td>
              </tr>
            )}
          </tbody>
        </table>
        {overview && <p style={{ fontWeight: 'bold' }}>Опис :</p>}
        {overview && <p>{overview}</p>}
      </div>
    </div>
  );
};

export default MovieDetails;
