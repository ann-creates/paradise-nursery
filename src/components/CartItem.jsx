import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.totalPrice}</p>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total Amount: ${totalAmount}</h3>

      <div style={{ marginTop: "20px" }}>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => alert("Checkout coming soon!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
