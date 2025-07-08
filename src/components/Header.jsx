import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useCart } from "./CartContext";

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TactiGear</Link>
      </div>
      <nav className="nav">
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart" className="cart-symbol">
          🛒
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}
