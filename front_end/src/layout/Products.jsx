import ProductCard from "../components/ProductCard";
import "./Products.scss";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/product");
  }

  return (
    <section
      className="Products"
      id="Products"
    >
      <h1> Products </h1>
      <div className="wrapper">
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
      <button className="product-nav-btn" onClick={handleClick}>View All Products</button>
    </section>
  );
}
