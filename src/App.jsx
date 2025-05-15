import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/movies"} element={<MoviesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
