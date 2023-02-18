import defaultPoster from 'images/no-poster.jpg';
import { IActor } from 'interfaces';
import style from "./Cast.module.css"



 const Actor=({ character, name, profile_path }:IActor)=> {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : `${defaultPoster}`;
  return (
    <li className={style.castItem}>
      <img src={imageUrl} alt={name} />
      <p className={style.name}>name:{name}</p>
      <p className={style.role}>character: {character}</p>
    </li>
  );
}
export default Actor
