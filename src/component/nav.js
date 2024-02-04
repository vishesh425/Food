import "../css/main.css";
import shopping from '../img/shopping-cart.png'
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

=======
>>>>>>> origin/master
function nav() {
  return (
    <nav className="nav_Container">
      <div className="logo_Conatiner">
        <h2 className="logo">Restaurant Landing Page</h2>
      </div>
      <dv className="link_container">
        <ul>
          <li className="link">
<<<<<<< HEAD
          <Link to="/about">Landing</Link>
            {/* <a href="#" >Landing</a> */}
          </li>
          <li className="link">
          <Link to="/home">Home</Link>
            {/* <a href="#" >Home</a> */}
          </li>
          <li className="link">
          <Link to="/">About Us</Link>
            {/* <a href="#" >Gallery</a> */}
          </li>
          <li className="link">
          <Link to="/">Shop</Link>
            {/* <a href="#" >Shop</a> */}
          </li>
          <li className="link">
          <Link to="/">Blog</Link>
            {/* <a href="#" >Blog</a> */}
          </li>
          <li className="link">
          <Link to="/">About</Link>
            {/* <a href="#" >About</a> */}
          </li>
          <li className="link">
          <Link to="/">Team</Link>
            {/* <a href="#" >Team</a> */}
          </li>
          <li className="link link_icon">
          <Link to="/">Contact</Link>
            {/* <a href="#">Contact </a> */}
=======
            <a href="#" >Landing</a>
          </li>
          <li className="link">
            <a href="#" >Home</a>
          </li>
          <li className="link">
            <a href="#" >Gallery</a>
          </li>
          <li className="link">
            <a href="#" >Shop</a>
          </li>
          <li className="link">
            <a href="#" >Blog</a>
          </li>
          <li className="link">
            <a href="#" >About</a>
          </li>
          <li className="link">
            <a href="#" >Team</a>
          </li>
          <li className="link link_icon">
            <a href="#">Contact </a>
>>>>>>> origin/master
            <a href="# "><img src={shopping} className="icon"/></a>
          </li>
        </ul>
      </dv>
    </nav>
  );
}

export default nav;
