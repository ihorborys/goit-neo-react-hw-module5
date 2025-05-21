import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/MainNav/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "./components/MovieCast/MovieCast.jsx";
import MovieReviews from "./components/MovieReviews/MovieReviews.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/movies"} element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
