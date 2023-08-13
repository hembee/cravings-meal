import { useState, useEffect } from "react";
import styles from "../styles/Signup.module.css";
import axios from "axios";
import NavBar from "../components/NavBar";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success
  const [loading, setLoading] = useState(false);

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
        console.error("signup failed:", error.response.data.message);
       
    } finally {
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
      <NavBar />
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
