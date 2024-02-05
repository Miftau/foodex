import "./MenuList.scss";
import { Link } from "react-router-dom";

export default function MenuList({content, href, handleClick}) {
  return (
    <li onClick={handleClick}>
      <Link to={href}>{content}</Link>
    </li>
  )
}
