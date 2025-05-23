import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(
  () => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"),
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(
  () => import("./components/MovieReviews/MovieReviews.jsx"),
);
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.jsx"),
);
const HomeLayout = lazy(() => import("./layouts/HomeLayout/HomeLayout.jsx"));
const MoviesLayout = lazy(
  () => import("./layouts/MoviesLayout/MoviesLayout.jsx"),
);
const MovieDetailsPageLayout = lazy(
  () => import("./layouts/MovieDetailsPageLayout/MovieDetailsPageLayout.jsx"),
);

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
}

export default App;
