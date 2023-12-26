import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="container">
          <div className="wrap">
            <div className="socials">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <a href="">
                    <i className="ri-facebook-line"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="ri-pinterest-line"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="links">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="links">
              <h3>Company</h3>
              <div className="comp-address">
                <p>
                  Manyata Tech Park <br />
                  Gate No. 1
                </p>
                <p>
                  <a href="">9508688080</a>
                  <br />
                  <a href="">hello@you.com</a>
                </p>
                <p>
                  Weekdays: 6AM to 6PM <br />
                  Saturday: 6AM to 3PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="subscribe">
              <h3>Get Voucher from Us</h3>
              <p>Enter your email below to be the first to know about new collections and products launches</p>
              <form action="" className="search">
                <i className="ri-mail-line"></i>
                <input type="text" placeholder="Enter you Mail" />
                <input type="submit" value="" />
                <i className="ri-arrow-right-line"></i>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            &#169; 2024 - <a href="#">FashionPedia</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
