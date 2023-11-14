import { useState } from "react";
import LoginCard from "../components/LoginCard";
import NavBar from "../components/NavBar";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <div className={styles.login}>
      <NavBar isLoggedIn={isLoggedIn}/>
      <div className={styles.center}>
        <LoginCard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default Login;
