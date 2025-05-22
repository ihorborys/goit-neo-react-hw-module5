import axios from "axios";

export const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const moviesUrl =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US";

const selectedMovieUrl = "https://api.themoviedb.org/3/movie/";

const movieTrendingUrl = "https://api.themoviedb.org/3/trending/movie/";

export const posterUrl = "https://image.tmdb.org/t/p/w300";
export const profileUrl = "https://image.tmdb.org/t/p/w185";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQ0MGNkMWJiODFkODk1YzAzODYyYmQ2NmJkZWE5NiIsIm5iZiI6MTc0NzIyMzEyNy4wOTcsInN1YiI6IjY4MjQ4MjU3NTA5N2M1YzYzZjZlZWVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2DPqu3LYTt1qumY62CPu_wHw77SDhmgkBz2a3EuoR3k",
  },
};

export const getMovies = async (searchQuery) => {
  const { data } = await axios.get(moviesUrl, {
    ...options,
    params: {
      query: searchQuery,
      page: 1,
      per_page: 20,
    },
  });
  return data;
};

export const getSelectedMovie = async (id) => {
  const { data } = await axios.get(`${selectedMovieUrl}${id}`, options);
  return data;
};

export const getSelectedMovieCast = async (id) => {
  const { data } = await axios.get(`${selectedMovieUrl}${id}/credits`, options);
  return data;
};

export const getSelectedMovieReviews = async (id) => {
  const { data } = await axios.get(`${selectedMovieUrl}${id}/reviews`, options);
  return data;
};

export const getMovieTrending = async () => {
  const { data } = await axios.get(`${movieTrendingUrl}/week`, options);
  return data;
};
