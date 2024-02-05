import "./Header.scss";

export default function Header({isOpen, setIsOpen}) {
  return (
    <header className={"Header " + (isOpen && "active")}>
       <div className="wrapper">
        <div className="left white-border">
          <h1 className="Title">
            <a href="/">FoodEx</a>
          </h1>
        </div>
        <div className="right white-border">
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
               <span className="line1"></span>
               <span className="line2"></span>
               <span className="line3"></span>
            </div>
        </div>
      </div>
    </header>
  )
}
