import "./style.scss";
import { productImg } from "../../data/productData";

const header1 = () => {
  return (
    <>
      <div className="inner-header">
        <div className="container">
          <div className="wrap">
            <div className="header-left">
              <div className="menu-bar">
                <a href="#0" className="menu-trigger">
                  <i className="ri-menu-fill"></i>
                </a>
              </div>
              <div className="list-inline">
                <ul>
                  <li>
                    <a href="">
                      <i className="ri-user-3-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="item-floating">7</span>
                      <i className="ri-star-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-center">
              <nav className="menu">
                <ul>
                  <li>
                    <a href="">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>Product</span>
                      <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="sub-mega">
                      <li>
                        <div className="container">
                          <div className="wrapper">
                            <div className="mega-content">
                              <div className="dotgrid">
                                <div className="wrapper">
                                  {/*  */}
                                  {productImg.map((product) => (
                                    <div key={product.id} className="item">
                                      <div className="dot-image">
                                        <a href="" className="product-permalink"></a>
                                        <div className="thumbnail">
                                          <img src={product.imageUrl} alt="img" />
                                        </div>
                                        <div className="thumbnail-hover">
                                          <img src={product.imageHover} alt="img" />
                                        </div>
                                        <div className="actions">
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
                                        <div className="label">
                                          <span>{product.label}</span>
                                        </div>
                                      </div>
                                      <div className="dot-info">
                                        <h2 className="dot-title">
                                          <a href="">{product.title}</a>
                                        </h2>
                                        <div className="product-price">
                                          <span className="before">{product.price[0].before}</span>
                                          <span className="current">{product.price[1].after}</span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  {/*  */}
                                </div>
                              </div>
                              <div className="links"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">
                      <span>Discount</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">
                      <span>Specials</span>
                      <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="sub-menu list-block">
                      <li>
                        <a href="#">Saint Lauren</a>
                      </li>
                      <li>
                        <a href="#">Gucchi</a>
                      </li>
                      <li>
                        <a href="#">Louis vuitton</a>
                      </li>
                      <li>
                        <a href="#">Versace</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">
                      <span>Sale</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="branding">
                <a href="">FashionPedia</a>
              </div>
            </div>
            <div className="header-right">
              <div className="list-inline">
                <ul>
                  <li>
                    <a href="">
                      <i className="ri-search-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="item-floating">0</span>
                      <i className="ri-shopping-bag-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header1;
