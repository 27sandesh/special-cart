import classes from "./CartButton.module.css";
import { uiActions } from "../Store/UI-createSlice";
import { useDispatch } from "react-redux";
const CartButton = (props) => {
  const dipatch = useDispatch();
  const toogleCrtHandler = () => {
    dipatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toogleCrtHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
