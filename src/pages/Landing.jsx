import Food from "../components/Food";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import styles from "../styles/Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.landing}>
      <NavBar />
      <Hero />
      <Food/>
    </div>
  );
};

export default Landing;
