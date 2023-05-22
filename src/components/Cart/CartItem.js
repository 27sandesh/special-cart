import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../Store/cart-slice";
const CartItem = (props) => {
  const dispath = useDispatch();
  const { title, quantity, total, price, id } = props.item;
  const removeHndler = () => {
    dispath(CartActions.removeItemCart(id));
  };
  const addHandler = () => {
    dispath(
      CartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHndler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
