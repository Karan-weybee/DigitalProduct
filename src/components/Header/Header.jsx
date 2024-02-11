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
                <Link>Services</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>
                  Shop
                 
                </Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="menu-functions -white">
          <Link className="menu-icon -navbar" >
              
              <Link className="menu-icon" onClick={showSearch}>
              <img
                src="assets/images/header/search-icon-white.png"
                alt="Search icon"
              />
              
            </Link>
             
            </Link>
            <Link className="menu-icon -search" onClick={showSearch}>
              <img
                src="assets/images/header/search-icon-white.png"
                alt="Search icon"
              />
              
            </Link>
            <div className="search-box" id="search-box" style={{ height: "3em",width:'345px' }}>
              <form action="">
            
                <input
                  type="text"
                  placeholder="Search product"
                  name="search"
                  value={search}
                  style={{paddingTop:'1.3em'}}
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
            <Link className="menu-icon -cart" onClick={logOut}>
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
            </Link>
            <h5>
              <span></span>
            </h5>
          </div>
          </>
            )}
            {!user && (
            <div className="menu-cart">
              <Link className="menu-icon -cart" onClick={openLoginModal}>
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
              </Link>
              <h5>
                <span></span>
              </h5>
            </div>
          
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
