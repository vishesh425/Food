import "../css/main.css";
import shopping from '../img/shopping-cart.png'
import { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav_Container">
      <div className="logo_Conatiner">
        <h2 className="logo">Restaurant Landing Page</h2>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`link_container ${menuOpen ? "active" : ""}`}>
        <ul>
          <li className="link"><Link to="/about">Landing</Link></li>
          <li className="link"><Link to="/home">Home</Link></li>
          <li className="link"><Link to="/">About Us</Link></li>
          <li className="link"><Link to="/">Shop</Link></li>
          <li className="link"><Link to="/">Blog</Link></li>
          <li className="link"><Link to="/">About</Link></li>
          <li className="link"><Link to="/">Team</Link></li>
          <li className="link link_icon">
            <Link to="/">Contact</Link>
            <a href="#"><img src={shopping} className="icon" /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;


