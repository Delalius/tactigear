import { Link } from "react-router-dom";
import '../styles/ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
      </Link>
    </div>
  );
}