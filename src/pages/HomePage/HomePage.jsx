import { useEffect, useState } from "react";
import { defaultImg, getMovieTrending, profileUrl } from "../../api/api.js";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const MovieCast = () => {
  const [movieTrending, setMovieTrending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const movieTrendingData = await getMovieTrending();
        if (movieTrendingData.results.length === 0)
          setErrorMessage("Sorry, can't find anything...");

        setMovieTrending(movieTrendingData);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, []);

  const { results } = movieTrending || {};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending this week</h1>
      <ul className={styles.list}>
        {results &&
          results.map((trendMovie) => (
            <li key={trendMovie.id} className={styles.item}>
              <Link to={`/movies/${trendMovie.id}`} className={styles.link}>
                <img
                  className={styles.image}
                  src={
                    trendMovie.poster_path
                      ? `${profileUrl}${trendMovie.poster_path}`
                      : defaultImg
                  }
                  width={185}
                  height={278}
                  alt="Movie poster image"
                />
              </Link>
            </li>
          ))}
      </ul>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default MovieCast;
