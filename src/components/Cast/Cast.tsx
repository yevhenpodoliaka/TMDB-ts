import style from "./Cast.module.css";
import { fetchCast } from "service/api-service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Actor from "./Actor";
import { IActor } from "interfaces";

const Cast = () => {

  const [cast, setCast] = useState<IActor[]>();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchCast(movieId!);
        await setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  return (

    <>
      {cast?.length === 0 ? (
        <p>Нажаль ми не маємо інформації щодо акторського складу</p>
      ) : (
        <ul className={style.cast}>
          {cast?.map(({ id, character, name, profile_path }) => {
            return (
              <Actor
                key={id}
                character={character}
                name={name}
                profile_path={profile_path}
              />
            );
          })}
        </ul>
      )}
    </>

  );
};

export default Cast;
