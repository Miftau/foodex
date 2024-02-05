import { useState } from "react";
import HomeHeader from "../layout-home/HomeHeader";
import HomeMenu from "../layout-home/HomeMenu";
import HomeImage from "../assets/HomeImage.png";
import ProductCard from "../components/ProductCard";
import "../styles/pages/Homepage.scss";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
import DisplayCard from "../components/DisplayCard";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <HomeHeader isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <HomeMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      {location.pathname === "/home" && (
        <main className="home-page">
          <section className="display-image sections">
            <img src={HomeImage} alt="" />
          </section>

          <section className="product-display sections">
            <h1 className="title">Browse the range</h1>
            <div className="product-list wrapper">
              <ProductCard
                src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706534665/Media_m866pl.png"
                heading="Vegetables"
              />
              <ProductCard
                src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706537325/unsplash_NPrWYa69Mz0_isfwmn.png"
                heading="Spices"
              />
              <ProductCard
                src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706537319/unsplash_M_xIaxQE3Ms_amfgy4.png"
                heading="Fruits"
              />
            </div>
          </section>
          <section className="our-products">
            <h1 className="title">Our Products</h1>
            <ul className="product-category-list">
              <li>ALL</li>
              <li>VEGETABLES</li>
              <li>GRAINS AND FLOURS</li>
              <li>OILS</li>
              <li>SPICES</li>
              <li>PROCESSED FOODS</li>
              <li>SEAFOODS</li>
            </ul>
            <div className="product-wrapper">
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images_1_wzufo3.png" name="Palm Oil" type="OILS" price="$ 25.00"/>
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images_2_fq3clo.png" name="Ofada Rice" type="GRAINS" price="$ 50.00"/>
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images-removebg-preview_5_1_ixftou.png" name="CrayFish" type="SEAFOODS" price="$ 20.00"/>
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images_1_wzufo3.png" name="Palm Oil" type="oils" price="$ 25.00"/>
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images_1_wzufo3.png" name="Palm Oil" type="oils" price="$ 25.00"/>
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images_1_wzufo3.png" name="Palm Oil" type="oils" price="$ 25.00"/>
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images_1_wzufo3.png" name="Palm Oil" type="oils" price="$ 25.00"/>
              <DisplayCard src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706955260/images_1_wzufo3.png" name="Palm Oil" type="oils" price="$ 25.00"/>
            </div>
            <button className="view-more">Show More</button>
          </section>
        </main>
      )}
      <Outlet />
      <Footer />
    </>
  );
}
