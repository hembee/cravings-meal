import LoginCard from "../components/LoginCard";
import NavBar from "../components/NavBar";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <NavBar />
      <div className={styles.center}>
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
