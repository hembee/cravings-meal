import { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = ({ login, logoutHandler }) => {
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    // Retrieve the stored value from local storage
    const storedIsSignup = localStorage.getItem("isSignup");

    // Set the state based on the stored value (or use the default)
    setIsSignup(storedIsSignup === "true");
  }, []);

  const toggleLoginSignup = () => {
    // Toggle the state
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  // Update local storage when the state changes
  useEffect(() => {
    localStorage.setItem("isSignup", isSignup.toString());
  }, [isSignup]);
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Cravings Meal
      </Link>
      <div className={styles.buttons}>
        <input
          className={styles.search}
          type="text"
          placeholder="search for products and services"
        />
        <span className={styles.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="13"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M10.9375 9.16667H10.2462L10.0012 8.94167C10.8587 7.99167 11.375 6.75833 11.375 5.41667C11.375 2.425 8.82875 0 5.6875 0C2.54625 0 0 2.425 0 5.41667C0 8.40833 2.54625 10.8333 5.6875 10.8333C7.09625 10.8333 8.39125 10.3417 9.38875 9.525L9.625 9.75833V10.4167L14 14.575L15.3037 13.3333L10.9375 9.16667ZM5.6875 9.16667C3.50875 9.16667 1.75 7.49167 1.75 5.41667C1.75 3.34167 3.50875 1.66667 5.6875 1.66667C7.86625 1.66667 9.625 3.34167 9.625 5.41667C9.625 7.49167 7.86625 9.16667 5.6875 9.16667Z"
              fill="white"
            />
          </svg>
        </span>
        <Link to="/cart" className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              d="M9.21094 24.2501C7.60677 24.2501 6.30885 25.5626 6.30885 27.1667C6.30885 28.7709 7.60677 30.0834 9.21094 30.0834C10.8151 30.0834 12.1276 28.7709 12.1276 27.1667C12.1276 25.5626 10.8151 24.2501 9.21094 24.2501ZM0.460938 0.916748V3.83341H3.3776L8.6276 14.9022L6.65885 18.4751C6.42552 18.8834 6.29427 19.3647 6.29427 19.8751C6.29427 21.4792 7.60677 22.7917 9.21094 22.7917H26.7109V19.8751H9.82344C9.61927 19.8751 9.45885 19.7147 9.45885 19.5105L9.5026 19.3355L10.8151 16.9584H21.6797C22.7734 16.9584 23.7359 16.3605 24.2318 15.4563L29.4526 5.99175C29.5693 5.78758 29.6276 5.53966 29.6276 5.29175C29.6276 4.48966 28.9714 3.83341 28.1693 3.83341H6.60052L5.22969 0.916748H0.460938ZM23.7943 24.2501C22.1901 24.2501 20.8922 25.5626 20.8922 27.1667C20.8922 28.7709 22.1901 30.0834 23.7943 30.0834C25.3984 30.0834 26.7109 28.7709 26.7109 27.1667C26.7109 25.5626 25.3984 24.2501 23.7943 24.2501Z"
              fill="#349307"
            />
          </svg>
        </Link>
        {!login ? (
          <Link
            to={isSignup ? "/signup" : "/login"}
            className={styles.loginBtn}
            onClick={toggleLoginSignup}
          >
            {isSignup ? "Signup" : "Login"}
          </Link>
        ) : (
          <Link
            to={"/login"}
            className={styles.loginBtn}
            onClick={logoutHandler}
          >
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
