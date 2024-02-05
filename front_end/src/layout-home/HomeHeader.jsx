import "./home-header.scss";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import shoppingCart from "../assets/shopping-cart.png";
import heart from "../assets/heart.png";

export default function HomeHeader({ isOpen, setIsOpen }) {
  return (
    <header className={"homeHeader " + (isOpen && "active")}>
      <div className="content-wrapper">
        <div className="header-left">
          <h1 className="Title">
            <a href="/">FoodEx</a>
          </h1>
        </div>
        <div className="header-right">
          <div className="nav-icons">
            <img src={search} alt="" />
            <img src={profile} alt="" />
            <img src={heart} alt="" />
            <img src={shoppingCart} alt="" />
          </div>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
