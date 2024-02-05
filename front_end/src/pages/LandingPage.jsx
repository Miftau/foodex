import Products from "../layout/Products";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Hero from "../layout/Hero";
import "../styles/pages/landingpage.scss";
import { useState } from "react";


export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="landingpage">
        <Header isOpen={menuOpen} setIsOpen={setMenuOpen} />
        <Menu isOpen={menuOpen} setIsOpen={setMenuOpen} />
        <div className="sections">
            <Hero />
            <Products />
        </div>
        <Footer />
    </main>
  )
}
