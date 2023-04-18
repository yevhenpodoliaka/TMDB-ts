import styles from './AboutMovie.module.css';
import ToggleGroupsButton from 'components/ToggleGroupsButtons/ToggleGroupsButtons';
 interface IAboutMovie {
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
  overview: string;
}
const AboutMovie = ({
  title,
  original_title,
  release_date,
  genres,
  vote_count,
  vote_average,
  revenue,
  homepage,
  runtime,
  budget,
  overview,
}: IAboutMovie) => {
  return (
    <div className={styles.descriptionWrap}>
      <ToggleGroupsButton/>
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
      {overview && <p className={styles.overviewTitle}>Опис :</p>}
      {overview && <p className={styles.overview}>{overview}</p>}
    </div>
  );
};

export default AboutMovie;
