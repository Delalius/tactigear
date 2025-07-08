import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error loading products:", error);
      } else {
        setProducts(data);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
