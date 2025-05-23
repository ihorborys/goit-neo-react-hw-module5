import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { defaultImg, getSelectedMovie, posterUrl } from "../../api/api.js";
import styles from "./MovieDetailsPage.module.css";
import MovieDetailsPageNav from "../../components/Navigation/MovieDetailsPageNav/MovieDetailsPageNav.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const movieData = await getSelectedMovie(movieId);
        if (movieData.length === 0)
          setErrorMessage("Sorry, can't find anything...");

        setMovie(movieData);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);
  console.log(movie);

  const backLink = useRef(location.state ?? "/movies");

  const handleClick = () => {
    if (backLink.current) navigate(backLink.current);
  };

  return (
    <div className={styles.container}>
      <button className={styles.buttonBack} onClick={handleClick}>
        Go Back
      </button>
      {movie && (
        <div className={styles.movieDetailsContainer}>
          <div className={styles.imageInfoWrapper}>
            <img
              src={
                movie.poster_path
                  ? `${posterUrl}${movie.poster_path}`
                  : defaultImg
              }
              width={300}
              alt="Movie poster image"
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
                <p className={styles.imageInfoItemParagValue}>
                  {movie.overview}
                </p>
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
            <p className={styles.addInfoTitle}>Additional information</p>
            <MovieDetailsPageNav />
          </div>
          <Outlet />
        </div>
      )}
      {loading && <Loader />}
      {errorMessage && (
        <ErrorMessage errorMessage={errorMessage} clasName={styles.error} />
      )}
    </div>
  );
};

export default MovieDetailsPage;
