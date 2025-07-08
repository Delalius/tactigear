import ProductList from "../components/ProductList"
import '../styles/Catalog.css'

export default function Catalog() {
  return (
    <div className="catalog-page">
      <div className="catalog-hero">
        <h1>Catalog</h1>
        <p>Browse our premium tactical gear collection</p>
      </div>
      <ProductList />
    </div>
  );
}