import React from "react";
import burger from "../images/burger.png";
import deli from "../images/delivery.avif";
import packaging from "../images/package.jpg";
import ingredients from "../images/ingredients.jpg";
import menu from "../images/menu.avif";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const data = [
    {
      id: 1,
      img: deli,
      head: "Fast Delivery",
      text: "Quick and efficient delivery with our express service.",
    },
    {
      id: 2,
      img: ingredients,
      head: "Fresh Ingredients",
      text: "Finest dishes made from the freshest, high-quality ingredients.",
    },
    {
      id: 3,
      img: menu,
      head: "Exclusive Menu",
      text: "Curated menu of exclusive dishes crafted to satisfy your cravings.",
    },
    {
      id: 4,
      img: packaging,
      head: "Secure Packaging",
      text: "Rest assured with our secure packaging for a perfect delivery.",
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
