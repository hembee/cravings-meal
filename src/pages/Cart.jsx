import NavBar from "../components/NavBar";
import styles from "../styles/Cart.module.css";
import burger from "../images/burger.png";
import pasta from "../images/pasta.png";
import donut from "../images/donuts.png";

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
  return (
    <div className={styles.cart}>
      <NavBar />
      <div className={styles.row}>
        <div className={styles.col}>
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
                  <h3>{meal.price}</h3>
                </div>
                <div className={styles.col3}>
                  <button className={styles.decreaseBtn}>-</button>
                  <p>1</p>
                  <button className={styles.increaseBtn}>+</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.col}>
          <div className={styles.ladittion}>
            <h1>Order Total</h1>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
