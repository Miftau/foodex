import MenuList from "../components/MenuList";
import SignUpButton from "../components/SignUpButton";
import "./Menu.scss"

export default function Menu({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className={"Menu " + (isOpen && "active")}>
      <ul>
        <MenuList content="Home" href="/home" handleClick={handleClick} />
        <MenuList content="Products" href="/products" handleClick={handleClick} />
        <MenuList content="Cart" href="/cart" handleClick={handleClick} />
        <MenuList content="Login" href="/login" handleClick={handleClick} />
      </ul>
      <SignUpButton />
    </div>
  );
}
