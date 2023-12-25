import "./style.scss";
import { productHero } from "../../data/productData";

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
                        <img src={product.imageUrl} alt="" />
                      </div>
                      {/* <div className="info">
                    <div className="btn-light">Shop Now</div>
                  </div> */}
                    </a>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
