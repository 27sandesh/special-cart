import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items); // Add 'return' statement

  console.log(cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>{" "}
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id} // Add a unique 'key' prop for each item
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalprice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
