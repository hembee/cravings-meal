import styles from "../styles/Food.module.css";
import burger from "../images/burger.png";
import donut from "../images/donuts.png";
import pasta from "../images/pasta.png";
import { Link } from "react-router-dom";

const Food = () => {
  const meals = [
    {
      id: 1,
      img: burger,
      header: "Burger",
      text: "Lorem ipsum dolor sit amet cocon adipisicing elit........",
      price: "₦2400",
    },
    {
      id: 2,
      img: pasta,
      header: "Pasta",
      text: "Lorem ipsum dolor sit amet cocon adipisicing elit........",
      price: "₦1800",
    },
    {
      id: 3,
      img: donut,
      header: "Donut",
      text: "Lorem ipsum dolor sit amet cocon adipisicing elit........",
      price: "₦800",
    },
  ];
  return (
    <section className={styles.food}>
      {meals.map((meal) => {
        return (
          <div className={styles.mealCard} key={meal.id}>
            <div className={styles.col1}>
              <img
                className={styles.mealImg}
                src={meal.img}
                alt={meal.header}
              />
            </div>
            <div className={styles.col2}>
              <h2>{meal.header}</h2>
              <p>{meal.text}</p>
            </div>
            <div className={styles.col3}>
              <h3>{meal.price}</h3>
              <Link to={"/cart"} className={styles.increaseBtn}>
                +
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Food;
