import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <div className={styles.message}>Sorry, page does not exists!</div>
      </Link>
    </div>
  );
};

export default NotFoundPage;
