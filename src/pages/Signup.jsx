import { useState, useEffect } from "react";
import styles from "../styles/Signup.module.css";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success
  const [loading, setLoading] = useState(false);

  const passwordHandler = () => {
    setInvalid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://cravings-5jte.onrender.com/user/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      // Redirect to /cart upon successful signup
      if (response.status === 201) {
        setSignupSuccess(true);
        console.log(response.data);
      } else if (response.status === 404) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message);
    } finally {
      passwordHandler();
      setLoading(false);
    }
  };

  // Use useEffect to perform the redirect once signupSuccess changes
  useEffect(() => {
    if (signupSuccess) {
      window.location.href = "/login"; // Redirect to /cart
    }
  }, [signupSuccess]);

  return (
    <>
      <div className={styles.center}>
        <form className={styles.signupCard} onSubmit={handleSubmit}>
          <input
            type="firstName"
            name="firstName"
            id="firstName"
            className={styles.firstName}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <input
            type="lastName"
            name="lastName"
            id="lastName"
            className={styles.lastName}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
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
          <p className={`${!invalid ? styles.hint : styles.red}`}>
            Password should be at least 8 characters, must include one uppercase
            letter, one lowercase letter, one number and one sppecial character.{" "}
          </p>
          <button className={styles.submit} type="submit" disabled={loading}>
            {loading ? (
              <div className={`${styles.spinner} ${styles.loading}`} />
            ) : (
              "Signup"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
