import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/api.js";
import styles from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async (query) => {
      const movies = await getMovies();
      console.log(movies.results);
      setMovies(movies.results);
    };
    fetchData();
  }, []);

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

  const handleSubmit = (value) => {
    console.log(value.query);
  };

  // const handleSearch = (value) => {
  //   // setPage(1);
  //   setSearchQuery(value.query);
  // };

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
      <MovieList movies={movies} />;
    </div>
  );
};

export default MoviesPage;
