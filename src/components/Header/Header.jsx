import React from "react";
// import logo from '../'

const Header = () => {
  const openLoginModal = () => {
    document.getElementById("loginModal").style.display = "block";
  };
  return (
    <div className="menu -style-3">
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="menu__wrapper">
          <a href="/index.html">
            <img src="assets/images/logo-white.png" alt="Logo" />
          </a>
          <div className="navigator -white">
            <ul>
              <li className="relative">
                <a href="">
                  Home
                  <span className="dropable-icon">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Beauty Salon</a>
                  </li>
                  <li>
                    <a href="homepage2.html">Makeup Salon</a>
                  </li>
                  <li>
                    <a href="homepage3.html">Natural Shop</a>
                  </li>
                  <li>
                    <a href="homepage4.html">Spa Shop</a>
                  </li>
                  <li>
                    <a href="homepage5.html">Mask Shop</a>
                  </li>
                  <li>
                    <a href="homepage6.html">Skincare Shop</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="shop-fullwidth-4col.html">
                  Shop
                  <span className="dropable-icon">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </a>
                <ul className="dropdown-menu -wide">
                  <ul className="dropdown-menu__col">
                    <li>
                      <a href="shop-fullwidth-4col.html">
                        Shop Fullwidth 4 Columns
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-5col.html">
                        Shop Fullwidth 5 Columns
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-left-sidebar.html">
                        Shop Fullwidth Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-right-sidebar.html">
                        Shop Fullwidth Right Sidebar
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-menu__col">
                    <li>
                      <a href="shop-grid-4col.html">Shop grid 4 Columns</a>
                    </li>
                    <li>
                      <a href="shop-grid-3col.html">Shop Grid 3 Columns</a>
                    </li>
                    <li>
                      <a href="shop-grid-sidebar.html">Shop Grid Sideber</a>
                    </li>
                    <li>
                      <a href="shop-list-sidebar.html">Shop List Sidebar</a>
                    </li>
                  </ul>
                  <ul className="dropdown-menu__col">
                    <li>
                      <a href="product-detail.html">Product Detail</a>
                    </li>
                    <li>
                      <a href="cart.html">Shopping cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wish list</a>
                    </li>
                  </ul>
                  <ul className="dropdown-menu__col -banner">
                    <a href="shop-fullwidth-4col.html">
                      <img
                        src="assets/images/header/dropdown-menu-banner.png"
                        alt="New product banner"
                      />
                    </a>
                  </ul>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu-functions -white">
            <a className="menu-icon -search" href="#">
              <img
                src="assets/images/header/search-icon-white.png"
                alt="Search icon"
              />
            </a>
            <div className="search-box " style={{ height: "3em" }}>
              <form>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  name="search"
                />
                <button>
                  <img
                    src="assets/images/header/search-icon.png"
                    alt="Search icon"
                  />
                </button>
              </form>
            </div>
            <a className="menu-icon -wishlist" href="/wishlist.html">
              <img
                src="assets/images/header/wishlist-icon-white.png"
                alt="Wishlist icon"
              />
            </a>
            <div className="menu-cart">
              <a className="menu-icon -cart" href="#" onClick={openLoginModal}>
                <img
                  src="./src/assets/images/header/user.png"
                  alt="Wishlist icon"
                  style={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "1px",
                  }}
                />
                {/* <span className="cart__quantity">0</span> */}
              </a>
              <h5>
                <span></span>
              </h5>
            </div>
            <a className="menu-icon -navbar" href="#">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
