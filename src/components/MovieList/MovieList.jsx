import styles from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Link to={`${movie.id}`} className={styles.link}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
