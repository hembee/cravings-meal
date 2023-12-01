import Food from "../components/Food";
import Hero from "../components/Hero";
import styles from "../styles/Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.landing}>
      <Hero />
      <Food/>
    </div>
  );
};

export default Landing;
