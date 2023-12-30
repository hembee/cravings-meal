import { useState, useEffect } from "react";
import styles from "../styles/LoginCard.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const LoginCard = ({ loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correct, setCorrect] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const passwordToggle = () => {
    setShow((prevState) => {
      return !prevState;
    });
  };

  const iconStyle = {
    cursor: "pointer",
    marginLeft: "-30px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const invalid = () => {
      setCorrect(false);
    };

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
        const token = response.data.accessToken;
        console.log("AccessToken:", token);

        localStorage.setItem("authToken", token);

        setLoginSuccess(true);
        loginHandler();
        console.log(response.data);
        console.log("AccessToken:", JSON.stringify(token));
      } else if (response.status === 404 || response.status === 404) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
      invalid();
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate("/cart");
    }
  }, [loginSuccess, navigate]);

  return (
    <div>
      <form className={styles.loginCard} onSubmit={handleSubmit}>
        {!correct && (
          <p className={styles.invalid}>Invalid email or password</p>
        )}
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
        <div className={styles.pass}>
          <input
            type={show ? "password" : "text"}
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
          <i style={iconStyle} onClick={passwordToggle}>
            {!show ? <RiEyeOffFill /> : <RiEyeFill />}
          </i>
        </div>
        <button className={styles.submit} type="submit" disabled={loading}>
          {loading ? (
            <div className={`${styles.spinner} ${styles.loading}`} />
          ) : (
            "Login"
          )}
        </button>
        <p>
          Don't have an account?
          <Link className={styles.sign} to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginCard;
