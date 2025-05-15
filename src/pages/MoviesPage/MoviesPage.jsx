import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/api.js";
import styles from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getMovies(searchQuery);
        if (data.results.length === 0)
          setErrorMessage("Sorry, can't find anything");

        setMovies(data.results);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);

  // useEffect(() => {
  //   if (!searchQuery) return;
  //
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       setErrorMessage("");
  //
  //       const data = await getImages(searchQuery, page);
  //       if (data.results.length === 0)
  //         setErrorMessage("Sorry, can't find anything");
  //
  //       setDataState((prevDataState) => {
  //         return page === 1
  //           ? data.results
  //           : [...prevDataState, ...data.results];
  //       });
  //     } catch (error) {
  //       setErrorMessage(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [searchQuery, page]);
  //
  // const handleSearch = () => {};

  // const handleSubmit = (value) => {
  //   console.log(value.query);
  // };

  const handleSearch = (values) => {
    console.log(values);
    if (values.query.trim().length > 0) setSearchQuery(values.query);
  };

  return (
    <div className={styles.moviePageWrapper}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
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
