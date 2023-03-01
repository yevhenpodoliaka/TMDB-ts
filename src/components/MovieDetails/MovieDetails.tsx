import styles from './MovieDetails.module.css';
import defaultPoster from 'images/no-poster.jpg';
import { IResponseById } from 'interfaces';
import AboutMovie from '../AboutMovie/AboutMovie';
import GoBackLink from 'components/GoBackLink/GoBackLink';
import { useState } from 'react';
import Trailer from 'components/Trailer/Trailer';
import Cast from 'components/Cast/Cast';
import MovieDetailsOptions from 'components/MovieDetailsOptions/MovieDetailsOptions';

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
    videos,
  } = data;

  const [currentInfo, setCurrentInfo] = useState('about');
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
  const key = videos?.results[0]?.key;

  const options = key
    ? [
        { value: 'about', label: 'Про фільм' },
        { value: 'cast', label: 'Актори' },
        { value: 'trailer', label: 'Трейлер' },
      ]
    : [
        { value: 'about', label: 'Про фільм' },
        { value: 'cast', label: 'Актори' },
      ];

  return (
    <>
      <GoBackLink />
      <MovieDetailsOptions options={options} onChange={setCurrentInfo} />
      <div
        className={styles.card}
        style={{
          backgroundImage: `linear-gradient(to right,
           rgba(92, 142, 149, 0.6),
            rgba(156, 180, 203, 0.6)),
            url(${`https://image.tmdb.org/t/p/w500/${
              backdrop_path && backdrop_path
            }`})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className={styles.posterWrap}>
          <img src={posterUrl} alt=" movies poster" />
        </div>
        <div className={styles.descriptionWrap}>
          {currentInfo === 'about' && (
            <AboutMovie
              title={title}
              original_title={original_title}
              release_date={release_date}
              genres={genres}
              vote_count={vote_count}
              vote_average={vote_average}
              revenue={revenue}
              homepage={homepage}
              runtime={runtime}
              budget={budget}
              overview={overview}
            />
          )}
          {currentInfo === 'cast' && <Cast />}
          {currentInfo === 'trailer' && key && <Trailer videoKey={key} />}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
