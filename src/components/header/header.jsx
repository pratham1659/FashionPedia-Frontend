import { useState } from "react";
import "./style.scss";
import { headerImg } from "../../data/productData";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

  const handleSearchIconClick = () => {
    setModalVisibility(true);
  };

  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen); //Submenu Its not working right now
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };
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
                  <a href="#" className="menu-trigger" onClick={toggleMenu}>
                    <i className={`ri-menu-fill ${isActive ? "active" : ""}`}></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span>Products</span>
                        <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <div className="megamenu">
                        <div className="container">
                          <div className="wrap">
                            <div className="menus">
                              <div className="links">
                                <h3>clothing</h3>
                                <ul>
                                  <li>
                                    <a href="#">Parada</a>
                                  </li>
                                  <li>
                                    <a href="#">Gucci</a>
                                  </li>
                                  <li>
                                    <a href="#">Zara</a>
                                  </li>
                                  <li>
                                    <a href="#">H&M</a>
                                  </li>
                                  <li>
                                    <a href="#">Mango</a>
                                  </li>
                                  <li>
                                    <a href="#">Chanel</a>
                                  </li>
                                  <li>
                                    <a href="#">Ganni</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="links">
                                <h3>Shoes</h3>
                                <ul>
                                  <li>
                                    <a href="#">Puma</a>
                                  </li>
                                  <li>
                                    <a href="#">Adidas</a>
                                  </li>
                                  <li>
                                    <a href="#">Nike</a>
                                  </li>
                                  <li>
                                    <a href="#">Gucci</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="links">
                                <h3>Bag</h3>
                                <ul>
                                  <li>
                                    <a href="#">Louis Vuitton</a>
                                  </li>
                                  <li>
                                    <a href="#">Dior</a>
                                  </li>
                                  <li>
                                    <a href="#">Versace</a>
                                  </li>
                                  <li>
                                    <a href="#">Dolce & Gabbana</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="featured">
                              <h3>Featured Products</h3>
                              <div className="product object-cover">
                                {/*  */}
                                {headerImg.map((product) => (
                                  <div key={product.id} className="list">
                                    <div className="product-thumb">
                                      <span className="label">{product.label}</span>
                                      <div className="thumbnail">
                                        <a href="#">
                                          <div className="image">
                                            <img src={product.imageUrl} alt="" />
                                          </div>
                                          <div className="image hover-image">
                                            <img src={product.imageHover} alt="" />
                                          </div>
                                        </a>
                                      </div>
                                      <div className="icons-act">
                                        <ul>
                                          {product.iconClass.map((iconObject, index) => (
                                            <li key={index}>
                                              {Object.values(iconObject).map((iconClassName, i) => (
                                                <a key={i} href="" className={iconClassName}></a>
                                              ))}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="product-info">
                                      <h2>
                                        <a href="#">{product.title}</a>
                                      </h2>
                                      <div className="price">
                                        <span className="before">{product.price[0].before}</span>
                                        <span className="current">{product.price[1].after}</span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                {/*  */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#0">
                        <span>Shop</span>
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
                    <li>
                      <a href="/error">
                        <span>Blog</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="logo">
                  <a href="">FashionPedia</a>
                </div>

                <div className="icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ri-search-line" onClick={handleSearchIconClick}></i>
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

        {/* Header Mobile Component */}
        <div className={`overlay ${isActive ? "active" : ""}`} onClick={closeMenu}></div>

        <nav className={`mobile ${isActive ? "active" : ""}`}>
          <div href="" className="close-trigger box" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Bag</a>
              <span className="sub-trigger">
                <i className="ri-arrow-down-s-line"></i>
              </span>
              <ul className="submenu">
                <li>
                  <a href="#">Dolce & Gabbana</a>
                </li>
                <li>
                  <a href="#">Louis Vuitton</a>
                </li>
                <li>
                  <a href="#">Dior</a>
                </li>
                <li>
                  <a href="#">Versace</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Clothing</a>
              <span className="sub-trigger">
                <i className="ri-arrow-down-s-line"></i>
              </span>
              <ul className="submenu">
                <li>
                  <a href="#">Parada</a>
                </li>
                <li>
                  <a href="#">Gucci</a>
                </li>
                <li>
                  <a href="#">Zara</a>
                </li>
                <li>
                  <a href="#">H&M</a>
                </li>
                <li>
                  <a href="#">Mango</a>
                </li>
                <li>
                  <a href="#">Chanel</a>
                </li>
                <li>
                  <a href="#">Ganni</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" onClick={toggleSubMenu}>
                Shoes
              </a>
              <span className={`sub-trigger ${isSubMenuOpen ? "open" : ""}`} onClick={toggleSubMenu}>
                <i className="ri-arrow-down-s-line"></i>
              </span>
              {isSubMenuOpen && (
                <ul className="submenu">
                  <li>
                    <a href="#">Puma</a>
                  </li>
                  <li>
                    <a href="#">Adidas</a>
                  </li>
                  <li>
                    <a href="#">Nike</a>
                  </li>
                  <li>
                    <a href="#">Gucci</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>

          <div className="enter">
            <div>
              <span>Enter</span>
            </div>
            <a href="#" className="btn-primary">
              Login
            </a>
            <a href="#" className="btn-light">
              SignUp
            </a>
          </div>
        </nav>
        {/* Header Mobile Ends Here */}
        {/* Search Modal Start from here */}

        <div className={`search-modal ${isModalVisible ? "active" : ""}`}>
          <div className="container">
            <div className="wrap">
              <div className="search-head">
                <strong>Search Everything</strong>
                <a href="#" className="close-trigger" onClick={handleCloseModal}>
                  <i className="ri-close-line"></i>
                </a>
              </div>
              <form action="" className="search">
                <i className="ri-search-line"></i>
                <input type="search" placeholder="Search Products" />
                <input type="submit" />
                <i className="ri-arrow-right-line"></i>
              </form>
              <div className="search-footer">
                <p>
                  <span>Popular Search: </span>
                  <a href="">Tshirt</a>
                  <a href="">Paints</a>
                  <a href="">Sweatshirt</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Modal Ends Here */}
      </div>
    </>
  );
};

export default Header;
