import "./style.scss";
import { productImg } from "../../data/productData";

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
                                {productImg.map((product) => (
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
