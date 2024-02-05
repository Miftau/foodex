import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ src, heading }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/product");
    }

  return (
    <div className="product-card">
      <div className="image-container">
        <button className="view" onClick={handleClick}>View</button>
        <img src={src} alt="" />
      </div>
      <h3>{heading}</h3>
    </div>
  );
}
