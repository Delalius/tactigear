import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer-content">
    <div>
      <h4>About TactiGear</h4>
      <p>Military & tactical gear store. Built for durability & precision.</p>
    </div>

    <div>
      <h4>Quick Links</h4>
      <a href="/catalog">Catalog</a><br />
      <a href="/cart">Cart</a><br />
      <a href="/checkout">Checkout</a>
    </div>

    <div>
      <h4>Contact</h4>
      <p>Email: support@tactigear.com</p>
      <p>Phone: +380 (XX) XXX-XX-XX</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} TactiGear. All rights reserved.</p>
  </div>
</footer>

  );
}
