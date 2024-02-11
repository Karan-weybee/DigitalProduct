import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { resetUserId } from "../../slices/userSlice";
import { Link } from "react-router-dom";
import { applySearch } from "../../slices/productSlice";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector(state=>state.userSlice.user);
  const [search,setSearch]=useState('');
   

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

  const goToHome =()=>{
    dispatch(resetUserId())
    nevigate('/')
  }
  return (
    <div className="menu -style-3">
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="menu__wrapper">
          <Link onClick={goToHome}>
            <img src="assets/images/logo-white.png" alt="Logo" />
          </Link>
          <div className="navigator -white">
            <ul>
              <li className="relative">
                <Link>
                  Home
                  <span className="dropable-icon">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </Link>
               
              </li>
              <li>
                <Link >Services</Link>
              </li>
              <li>
                <Link >About</Link>
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
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
