import { useEffect, useState } from "react";
import { getMovieTrending } from "../../api/api.js";
import styles from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [movieTrending, setMovieTrending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTrending = async () => {
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

    fetchTrending();
  }, []);

  const { results } = movieTrending || {};

  const movies = results;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending this week</h1>
      {movies && <MovieList movies={movies} />}
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default HomePage;
