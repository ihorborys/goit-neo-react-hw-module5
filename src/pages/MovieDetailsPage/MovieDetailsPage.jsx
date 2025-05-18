import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSelectedMovie } from "../../api/api.js";
import styles from "./MovieDetailsPage.module.css";
import MovieCast from "../../components/MovieCast/MovieCast.jsx";
import MovieReviews from "../../components/MovieReviews/MovieReviews.jsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const posterUrl = "https://image.tmdb.org/t/p/w300";
  console.log(movieId);

  useEffect(() => {
    if (movieId) {
      console.log(movieId);
      const fetchData = async () => {
        const movie = await getSelectedMovie(movieId);
        setMovie(movie);
      };

      fetchData();
    }
  }, [movieId]);
  console.log(movie);
  return (
    movie && (
      <div className={styles.movieDetailsContainer}>
        <div className={styles.imageInfoWrapper}>
          <img
            src={`${posterUrl}${movie.poster_path}`}
            alt={"Poster description"}
          />
          <ul className={styles.imageInfoList}>
            <li className={styles.imageInfoItem}>
              <p className={styles.imageInfoItemTitle}>
                {movie.original_title}
              </p>
              <p className={styles.imageInfoItemYear}>
                - {new Date(movie.release_date).getFullYear()} -
              </p>
            </li>
            <li className={styles.imageInfoItem}>
              <p className={styles.imageInfoItemParagTitle}>Average Vote</p>
              <p className={styles.imageInfoItemParagValue}>
                {Number(movie.vote_average).toFixed(2)} / 10
              </p>
            </li>
            <li className={styles.imageInfoItem}>
              <p className={styles.imageInfoItemParagTitle}>Overview</p>
              <p className={styles.imageInfoItemParagValue}>{movie.overview}</p>
            </li>
            <li className={styles.imageInfoItem}>
              <p className={styles.imageInfoItemParagTitle}>Genres</p>
              <p className={styles.imageInfoItemParagValue}>
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.addInfo}>
          Additional information
          <MovieCast />
          <MovieReviews />
        </div>
      </div>
    )
  );
};

export default MovieDetailsPage;
