import Image from "../assets/fruit.png";
import "./display-card.scss";
import { useNavigate } from "react-router-dom";

export default function DisplayCard({src, name, type, price}) {

  const navigate = useNavigate()

  return (
    <div className="product-card">
      <div className="image-container">
        <button className="add-to-cart" onClick={() => navigate("product/cart")}>Add to cart</button>
        <img src={src} alt="" />
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-type">{type}</p>
      <h3 className="price">{price}</h3>
    </div>
  )
}
