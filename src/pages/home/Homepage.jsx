import "./style.scss";
import { productHero, arrivalImg } from "../../data/productData";
import videoImg from "/assets/clothing/hero_06.jpg";
import demoImg from "/assets/clothing/hero_07.png";

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
              <ul className="swiper-wrapper">
                <li className=" swiper-slide active">
                  <a href="">New Arrivals</a>
                </li>
                <li className="swiper-slide">
                  <a href="#0">On Sale</a>
                </li>
                <li className="swiper-slide">
                  <a href="#0">Best Seller</a>
                </li>
              </ul>
            </nav>
            <div className="tabs-box swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product object-cover">
                    {arrivalImg.map((product) => (
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
      {/* tabbed container start from here  */}

      {/* Video container start from here */}
      <div className="video">
        <div className="container">
          <div className="wrap">
            <div className="video-box object-cover">
              <div className="image">
                <img src={videoImg} alt="video" />
              </div>
              <div className="attribute">
                <i className="ri-play-fill"></i>
                <h3>The Ambassador</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video container ends here */}

      {/* Youtube container start from here */}
      {/* Youtube container ends Here */}

      {/* Social Media Banner Start from here */}
      <div className="banner">
        <div className="container">
          <div className="wrap object-cover">
            <div className="bg-image">
              <img src={demoImg} alt="" />
            </div>
            <div className="info">
              <span>Hot Deals</span>
              <h3>Casual Dress</h3>
              <div className="button">
                <a href="" className="btn-light">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Banner Ends from here */}
    </main>
  );
};

export default Homepage;
