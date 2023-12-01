import React from "react";
import burger from "../images/burger.png";
import deli from "../images/deli.jpeg";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const data = [
    {
      id: 1,
      img: deli,
      head: "Fast delivery",
      text: "Receive your order in the twinkle of an eye",
    },
    {
      id: 2,
      img: deli,
      head: "Fast delivery",
      text: "Receive your order in a flash",
    },
    {
      id: 3,
      img: deli,
      head: "Fast delivery",
      text: "Receive your order in a flash",
    },
    {
      id: 4,
      img: deli,
      head: "Fast delivery",
      text: "Receive your order in a flash",
    },
  ];
  return (
    <section className={styles.hero}>
      <h1 className={styles.text}>
        Fastest
        <br /> Food Delivery
      </h1>
      <img className={styles.burgerImg} src={burger} alt="hamburger" />
      <div className={styles.column}>
        {data.map((d) => {
          return (
            <div key={d.id} className={styles.row}>
              <img className={styles.lilImg} src={d.img} alt="steak" />
              <div className={styles.col}>
                <h4 className={styles.lilHead}>{d.head}</h4>
                <p className={styles.lilText}>{d.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

