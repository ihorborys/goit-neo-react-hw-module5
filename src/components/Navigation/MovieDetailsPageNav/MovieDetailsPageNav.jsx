import { NavLink } from "react-router-dom";
import styles from "./MovieDetailsPageNav.module.css";

const navClasses = ({ isActive }) => {
  return isActive ? styles.active : "";
};

const MovieDetailsPageNav = () => {
  return (
    <ul className={styles.navigationList}>
      <li className={styles.navigationItem}>
        <NavLink to="cast" className={navClasses}>
          Cast
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink to="reviews" className={navClasses}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default MovieDetailsPageNav;
