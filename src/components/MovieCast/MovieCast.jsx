import { useEffect, useState } from "react";
import { defaultImg, getSelectedMovieCast, profileUrl } from "../../api/api.js";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(movieId);

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const movieCastData = await getSelectedMovieCast(movieId);
        if (movieCastData.length === 0)
          setErrorMessage("Sorry, can't find anything...");

        setMovieCast(movieCastData);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
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
              <p className={styles.name}>{actor.name}</p>
              <p className={styles.character}>{actor.character}</p>
            </li>
          ))}
      </ul>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default MovieCast;
