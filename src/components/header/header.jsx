import "./style.scss";

const header = () => {
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
                    </a>
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
                    </a>
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

export default header;
