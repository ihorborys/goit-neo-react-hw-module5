import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSelectedMovie } from "../../api/api.js";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    if (movieId) {
      console.log(movieId);
      const fetchData = async () => {
        const response = await getSelectedMovie(movieId);
        setMovie(response);
      };

      fetchData();
    }
  }, [movieId]);
  console.log(movie);
  return (
    movie && (
      <div>
        {movie.id}
        {movie.original_title}
        {movie.poster_path}
      </div>
    )
  );
};

export default MovieDetailsPage;
