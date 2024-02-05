import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="firstSection">
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </div>
      <div className="footer-container">
      <div className="secondSection">
        <h3>Links</h3>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
        <div className="thirdSection">
          <h3>Help</h3>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>
        <div className="fourthSection">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </form>
        </div>
      <p className="copywright">2023 foodEx. All rights reserved</p>
    </footer>
  );
}
