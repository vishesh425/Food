function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_section about">
          <h3>About Us</h3>
          <p>
            We provide the best dining experience with top-class service and
            quality ingredients. Come visit us!
          </p>
        </div>

        <div className="footer_section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer_section contact">
          <h3>Contact Info</h3>
          <p>Email: contact@restaurant.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Location: City Center, Main Road, India</p>
        </div>
      </div>

      <div className="footer_bottom">
        &copy; {new Date().getFullYear()} Your Restaurant Name. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
