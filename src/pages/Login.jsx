import LoginCard from "../components/LoginCard";
import styles from "../styles/Login.module.css";

const Login = ({loginHandler}) => {
 
  return (
    <div className={styles.login}>
      <div className={styles.center}>
        <LoginCard loginHandler={loginHandler}/>
      </div>
    </div>
  );
};

export default Login;
