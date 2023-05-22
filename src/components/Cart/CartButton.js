import classes from "./CartButton.module.css";
import { uiActions } from "../Store/UI-createSlice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dipatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toogleCrtHandler = () => {
    dipatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toogleCrtHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
