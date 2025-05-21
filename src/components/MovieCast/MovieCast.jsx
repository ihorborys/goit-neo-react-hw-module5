import { useEffect, useState } from "react";
import { defaultImg, getSelectedMovieCast, profileUrl } from "../../api/api.js";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(movieId);

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const movieCastData = await getSelectedMovieCast(movieId);
        setMovieCast(movieCastData);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  const { cast } = movieCast || {};

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {cast &&
          cast.map((actor) => (
            <li key={actor.id} className={styles.item}>
              <img
                className={styles.image}
                src={
                  actor.profile_path
                    ? `${profileUrl}${actor.profile_path}`
                    : defaultImg
                }
                width={185}
                height={278}
                alt="Movie poster image"
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieCast;
