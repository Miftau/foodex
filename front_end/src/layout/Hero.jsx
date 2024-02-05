import "./Hero.scss";
import SignUpButton from "../components/SignUpButton";

export default function Hero() {
  return (
    <section className="Hero">
      <div className="left">
        <h1>Taste of Home Delivered</h1>
        <p>Craving the taste of your beloved Nigerian dishes? Look no further. Connect with verified Nigerian food vendors to purchase local food stuff and experience the satisfaction of fresh food products delivered to your doorstep</p>
        <SignUpButton />
      </div>

      <div className="right">
        <div className="image-container">
          <img
            src= "https://res.cloudinary.com/dmqhmprkr/image/upload/v1706531475/unsplash_WOxddhzhC1w_irk1xu.png"
            alt="food products"
          />
        </div>
      </div>
    </section>
  );
}
