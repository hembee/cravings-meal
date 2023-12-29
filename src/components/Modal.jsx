import styles from "../styles/Modal.module.css";
import check from "../images/check.png";
import { Link } from "react-router-dom";

export const Modal = ({ modalHandler }) => {
  return (
    <div className={styles.blur} onClick={modalHandler}>
      <div
        className={styles.card}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img className={styles.img} src={check} />
        <h1 className={styles.text}>Order confirmed</h1>
        <Link to={"/"} className={styles.submitBtn} onClick={modalHandler}>
          OK
        </Link>
      </div>
    </div>
  );
};
