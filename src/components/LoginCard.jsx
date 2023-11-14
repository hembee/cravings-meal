import { useState, useEffect } from "react";
import styles from "../styles/LoginCard.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginCard = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "https://cravings-5jte.onrender.com/user/login",
        {
          email,
          password,
        }
      );

      // Redirect to /cart upon successful login
      if (response.status === 200) {
        setLoginSuccess(true);
        setIsLoggedIn(true);
        console.log(response.data);
      } else if (response.status === 404) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      window.href.redirect("/cart"); 
    }
  }, [loginSuccess]);

  return (
    <div>
      <form className={styles.loginCard} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.email}
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className={styles.password}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button className={styles.submit} type="submit" disabled={loading}>
          {loading ? (
            <div className={`${styles.spinner} ${styles.loading}`} />
          ) : (
            "Login"
          )}
        </button>
        <p>
          Don't have an account?{" "}
          <Link className={styles.sign} to="/signup">
            Sign Up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginCard;
