import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { resetUserId } from "../../slices/userSlice";
import { Link } from "react-router-dom";
import { applySearch } from "../../slices/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.userSlice.user);
  const [search,setSearch]=useState('');
   
  const openLoginModal = () => {
    document.getElementById("loginModal").style.display = "block";
  };

  const logOut =()=>{
  dispatch(resetUserId());
  }
  const searchProduct = (e)=>{
    e.preventDefault();
   dispatch(applySearch(search))
  }
  const removeSearch =(e)=>{
    e.preventDefault();
    setSearch('');
    dispatch(applySearch(''))
    document.getElementById('search-box').classList.remove('active')
  
  }
  const showSearch=()=>{
    document.getElementById('search-box').classList.add('active')
  }
  return (
    <div className="menu -style-3">
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="menu__wrapper">
          <Link to="/">
            <img src="assets/images/logo-white.png" alt="Logo" />
          </Link>
          <div className="navigator -white">
            <ul>
              <li className="relative">
                <Link to="/">
                  Home
                  <span className="dropable-icon">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </Link>
               
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
                 
                </a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </div>
          <div className="menu-functions -white">
            <a className="menu-icon -search" onClick={showSearch}>
              <img
                src="assets/images/header/search-icon-white.png"
                alt="Search icon"
              />
              
            </a>
            <div className="search-box" id="search-box" style={{ height: "3em",width:'345px' }}>
              <form action="">
            
                <input
                  type="text"
                  placeholder="Search"
                  name="search"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value); dispatch(applySearch(e.target.value))}}
                />
                <button type="submit" style={{width:'70px'}} onClick={searchProduct}>
                  <img
                    src="assets/images/header/search-icon.png"
                    alt="Search icon"
                  />
                </button>
                <button type="submit" id="removeSearch" onClick={removeSearch}>X</button>
             
              </form>
            </div>
            {user && (
              <>
            <Link className="menu-icon -wishlist" to="/wishlist">
              <img
                src="assets/images/header/wishlist-icon-white.png"
                alt="Wishlist icon"
              />
            </Link>

            <div className="menu-cart">
            <a className="menu-icon -cart" href="#" onClick={logOut}>
              <img
                src="./src/assets/images/header/logout.png"
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
          </>
            )}
            {!user && (
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
          
            )}
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
