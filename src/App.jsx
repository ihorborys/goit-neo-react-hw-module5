import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";

function App() {
  return (
    <div className={"container"}>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/movies"} element={<MoviesPage />}></Route>
        <Route path={"/movies/details"} element={<MovieDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
