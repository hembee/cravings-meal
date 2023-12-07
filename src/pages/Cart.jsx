import styles from "../styles/Cart.module.css";
import burger from "../images/burger.png";
import pasta from "../images/pasta.png";
import donut from "../images/donuts.png";
import { useState } from "react";

const Cart = () => {
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

  const [counts, setCounts] = useState(new Array(meals.length).fill(0));

  const increaseCount = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const decreaseCount = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(0, newCounts[index] - 1);
      return newCounts;
    });
  };

  return (
    <div className={styles.cart}>
      <div className={styles.row}>
        <div className={styles.col}>
          {meals.map((meal, index) => {
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
                  <h3>{meal.price}</h3>
                </div>
                <div className={styles.col3}>
                  <button
                    className={styles.decreaseBtn}
                    onClick={() => decreaseCount(index)}
                  >
                    -
                  </button>
                  <p>{counts[index]}</p>
                  <button
                    className={styles.increaseBtn}
                    onClick={() => increaseCount(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.col}>
          <div className={styles.ladittion}>
            <h2>Order Total</h2>
            <div className={styles.row}>
              <p className={styles.para}>Subtotal</p>
              <p className={styles.price}>1200</p>
            </div>
            <div className={styles.row}>
              <p className={styles.para}>Delivery</p>
              <p className={styles.price}>300</p>
            </div>
            <div className={`${styles.lastrow} ${styles.row}`}>
              <p className={styles.para}>Total</p>
              <p className={styles.price}>1500</p>
            </div>
            <button
                    className={styles.proceedBtn}
                    onClick={()=>{}}
                  >
                    Proceed to checkout
                  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
