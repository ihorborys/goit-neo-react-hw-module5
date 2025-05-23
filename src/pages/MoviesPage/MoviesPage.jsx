import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/api.js";
import styles from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(location);

  useEffect(() => {
    if (!searchParams.size) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getMovies(searchParams.get("query"));
        if (data.results.length === 0)
          setErrorMessage("Sorry, can't find anything...");

        setMovies(data.results);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSubmit = (values) => {
    console.log(values);
    if (!values.query) {
      setMovies([]);
      setErrorMessage("Please, enter a search query");
      setSearchParams({});
      return;
    }
    if (values.query.trim().length > 0) searchParams.set("query", values.query);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.moviePageWrapper}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <div className={styles.formWrapper}>
            <Field
              name="query"
              className={styles.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            ></Field>
            <button className={styles.button} type="submit">
              Search
            </button>
          </div>
        </Form>
      </Formik>
      <MovieList movies={movies} />
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default MoviesPage;
