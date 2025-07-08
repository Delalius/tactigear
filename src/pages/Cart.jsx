import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)} × {item.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑 Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
