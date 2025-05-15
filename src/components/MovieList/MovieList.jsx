import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
      ;
    </ul>
  );
};

export default MovieList;
