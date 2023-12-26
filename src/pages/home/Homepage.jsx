import "./style.scss";
import { productImg, productHero } from "../../data/productData";

const Homepage = () => {
  return (
    <main>
      <div className="hero">
        <div className="container">
          <div className="wrap object-cover">
            {productHero.map(
              (product, index) =>
                index < 5 && (
                  <div key={product.id} className={`list ${product.id === 1 ? "big" : ""}`}>
                    <a href="#">
                      <div className="image">
                        <img src={product.imageUrl} alt="products" />
                      </div>
                      <div className="info">
                        <div className="btn-light">{product.info}</div>
                      </div>
                    </a>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      {/* Hero ends here  */}

      {/* tabbed container start from here  */}
      <div className="tabbed">
        <div className="container">
          <div className="wrap">
            <nav className="tabs">
              <ul>
                <li className="active">
                  <a href="">New Arrivals</a>
                </li>
                <li>
                  <a href="#0">On Sale</a>
                </li>
                <li>
                  <a href="#0">Best Seller</a>
                </li>
              </ul>
            </nav>
            <div className="tabs-box">
              <div className="wrapper">
                <div className="slide">
                  <div className="product object-cover">
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
                          <div className="colors">
                            <a href="" className="maroon active"></a>
                            <a href="" className="gold"></a>
                            <a href="" className="beige"></a>
                          </div>
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
                  </div>
                  <div className="button">
                    <a href="#" className="btn-primary">
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
