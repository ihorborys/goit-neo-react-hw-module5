import styles from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Link to={`${movie.id}`} className={styles.link} state={location}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
