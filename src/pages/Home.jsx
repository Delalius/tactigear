import "../styles/Home.css";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function fetchFeatured() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(8);

      if (!error) setFeatured(data);
    }

    fetchFeatured();
  }, []);

  return (
    <div className="scroll-container">
      {/* Hero section */}
      <section className="hero fullscreen-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/tactical-bg.jpg)` }}>
        <div className="hero-overlay fade-in">
          <h1>TactiGear</h1>
          <p>Premium tactical apparel for those who demand performance</p>
          <Link to="/catalog">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="featured fullscreen-section light-section">
        <h2 className="fade-in">Featured Gear</h2>
        <div className="product-grid fade-in delay-1">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section
        className="fullscreen-section"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/tactical-gear-1.jpg)` }}
      >
        <h2 className="fade-in">Unmatched Performance</h2>
        <p className="fade-in delay-1">Gear tested in the toughest conditions</p>
        <Link to="/catalog">
          <button className="fade-in delay-2">Explore Gear</button>
        </Link>
      </section>

      <section
        className="fullscreen-section"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/tactical-gear-2.jpg)` }}
      >
        <h2 className="fade-in">Trusted by Professionals</h2>
        <p className="fade-in delay-1">Worn by military, security and adventurers</p>
      </section>

      {/* Testimonials */}
      <section className="testimonials fullscreen-section dark-section">
        <h2 className="fade-in">What Our Customers Say</h2>
        <div className="testimonial-grid fade-in delay-1">
          <div className="testimonial">
            <p>"Best tactical pants I've ever worn!"</p>
            <span>— Oleg, Special Forces</span>
          </div>
          <div className="testimonial">
            <p>"Fast delivery and excellent quality."</p>
            <span>— Dmytro, Hunter</span>
          </div>
        </div>
      </section>
    </div>
  );
}
