import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQ0MGNkMWJiODFkODk1YzAzODYyYmQ2NmJkZWE5NiIsIm5iZiI6MTc0NzIyMzEyNy4wOTcsInN1YiI6IjY4MjQ4MjU3NTA5N2M1YzYzZjZlZWVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2DPqu3LYTt1qumY62CPu_wHw77SDhmgkBz2a3EuoR3k",
  },
};

export const getMovies = async (searchQuery) => {
  const { data } = await axios.get(url, {
    ...options,
    params: {
      query: searchQuery,
      page: 1,
      per_page: 20,
    },
  });
  console.log(data);
  return data;
};

// .get(url, options)
// .then((response) => console.log(response))
// .catch((err) => console.error(err));

// axios.defaults.baseURL = "https://api.unsplash.com";
//
// export const getMovies = async (searchQuery, page) => {
//   const { data } = await axios.get("/search/photos", {
//     params: {
//       client_id: "QMyvt8jb24108khvQVvUu6GbAKmLMegr2UZ9NZ7VatM",
//       query: searchQuery,
//       page: page,
//       per_page: 20,
//     },
//   });
//   return data;
// };
