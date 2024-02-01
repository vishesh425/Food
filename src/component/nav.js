import "../css/main.css";
import shopping from '../img/shopping-cart.png'
function nav() {
  return (
    <nav className="nav_Container">
      <div className="logo_Conatiner">
        <h2 className="logo">Restaurant Landing Page</h2>
      </div>
      <dv className="link_container">
        <ul>
          <li className="link">
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
            <a href="# "><img src={shopping} className="icon"/></a>
          </li>
        </ul>
      </dv>
    </nav>
  );
}

export default nav;
