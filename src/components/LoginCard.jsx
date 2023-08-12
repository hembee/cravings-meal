import { useState } from "react";
import styles from "../styles/LoginCard.module.css";
// import axios from "axios"

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.loginCard}>
      <form action="/" method="post">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default LoginCard;
