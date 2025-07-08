import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "../styles/ProductDetails.css";
import { useCart } from "../components/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error loading product", error);
      } else {
        setProduct(data);
      }
    }

    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    addToCart(product);
  }

  if (!product) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-button">← Back to catalog</button>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price"><strong>${product.price}</strong></p>
        {product.in_stock ? (
          <button onClick={handleAddToCart} className="add-button">Add to Cart</button>
        ) : (
          <span className="out-of-stock">Out of stock</span>
        )}
      </div>
    </div>
  );
}
