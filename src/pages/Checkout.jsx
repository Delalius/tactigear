import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    localStorage.removeItem("cart");
    setCart([]);
    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (submitted) {
    return <div className="thank-you-message">Thank you for your order, {name}! 🎉</div>;
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>
                    {item.quantity} × ${item.price} = ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="total-price">Total: ${total.toFixed(2)}</p>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Confirm Order</button>
          </form>
        </>
      )}
    </div>
  );
}
