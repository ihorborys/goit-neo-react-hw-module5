import styles from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import { defaultImg, profileUrl } from "../../api/api.js";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Link
            to={`/movies/${movie.id}`}
            className={styles.link}
            state={location}
          >
            <img
              className={styles.image}
              src={
                movie.poster_path
                  ? `${profileUrl}${movie.poster_path}`
                  : defaultImg
              }
              width={185}
              height={278}
              alt="Movie poster image"
            />
            <div className={styles.title}>{movie.original_title}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
