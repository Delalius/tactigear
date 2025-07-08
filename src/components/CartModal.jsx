import { useCart } from "./CartContext";
import "../styles/CartModal.css";

export default function CartModal() {
  const { showModal, setShowModal, cartItems, removeFromCart, updateQuantity } = useCart();

  if (!showModal) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("cart-modal-overlay")) {
      setShowModal(false);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-modal-overlay" onClick={handleOverlayClick}>
  <div className="cart-modal">
    <button className="close-button" onClick={() => setShowModal(false)}>×</button>
    <h2>Your Cart</h2>

    <div className="cart-items">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <strong>{item.title}</strong>
              <p>${item.price}</p>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑</button>
          </div>
        ))
      )}
    </div>

{cartItems.length > 0 && (
  <div className="cart-footer">
    <div className="total">Total: ${total.toFixed(2)}</div>
    <div className="cart-actions">
      <button className="secondary-btn" onClick={() => setShowModal(false)}>Continue Shopping</button>
      <button className="primary-btn" onClick={() => {
        setShowModal(false);
        window.location.href = "/checkout";
      }}>
        Checkout
      </button>
    </div>
  </div>
)}

  </div>
</div>

  );
}
