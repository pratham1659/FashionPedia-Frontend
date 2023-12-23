import "./style.scss";
// import { productImg } from "../../data/productData";

const header = () => {
  return (
    <>
      {/* header-top start here */}
      <div id="page" className="site">
        <header>
          <div className="header-top">
            <div className="container">
              <div className="wrap">
                <div className="socials">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ri-facebook-box-line"></i>
                        <span>400k Folllowers</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ri-instagram-line"></i>
                        <span>5M Folllowers</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="options">
                  <div className="langs">
                    <ul>
                      <li>
                        <a href="#">
                          <span className="flag us"></span>
                          <span>English</span>
                          <i className="ri-arrow-down-s-line"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="">
                              <span className="flag in"></span>
                              <span>Hindi</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className="flag de"></span>
                              <span>Dutch</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="currency">
                    <ul>
                      <li>
                        <a href="#">
                          <span>INR</span>
                          <i className="ri-arrow-down-s-line"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <span>USD</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>EUR</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-top ends here */}
          {/* header-main start here  */}
          <div className="header-main">
            <div className="container">
              <div className="wrap">
                <nav>
                  <a href="#" className="menu-trigger">
                    <i className="ri-menu-line"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Products</span>
                        <i className="ri-arrow-down-s-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Shop</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Blog</span>
                        <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="#">Latest</a>
                        </li>
                        <li>
                          <a href="#">Jumper</a>
                        </li>
                        <li>
                          <a href="#">A Must Read</a>
                        </li>
                        <li>
                          <a href="#">Gose Viral</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="logo">
                  <a href="">FashionPedia</a>
                </div>
                <div className="icons">
                  <ul>
                    <li>
                      <a href="">
                        <i className="ri-search-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ri-user-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ri-heart-line"></i>
                        <span className="qty">7</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ri-shopping-bag-line"></i>
                        <span className="qty">7</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default header;
