import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "./components/MovieCast/MovieCast.jsx";
import MovieReviews from "./components/MovieReviews/MovieReviews.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import HomeLayout from "./layouts/HomeLayout/HomeLayout.jsx";
import MoviesLayout from "./layouts/MoviesLayout/MoviesLayout.jsx";
import MovieDetailsPageLayout from "./layouts/MovieDetailsPageLayout/MovieDetailsPageLayot.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomeLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
        <Route path={"/movies"} element={<MoviesLayout />}>
          <Route path={"/movies"} element={<MoviesPage />}></Route>
        </Route>
        <Route path={"/movies/:movieId"} element={<MovieDetailsPageLayout />}>
          <Route path={"/movies/:movieId"} element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
