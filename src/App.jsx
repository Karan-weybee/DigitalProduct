import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Modal from "./components/ProductDetail/Modal";
import LoginModal from "./components/LoginModal";
import AdminProduct from "./components/AdminProducts/AdminProduct";
import AdminModal from "./components/AdminProductDetails/AdminModal";
import AddProduct from "./components/Product/AddProduct";
import UserWishList from "./components/UserWishList/UserWishList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    
  
    <Outlet/>
      {/* <Header />
     
      <AdminProduct/>
      <AdminModal/>
      <AddProduct/>

      <Content />
      <Modal />
      <LoginModal />
      <UserWishList/> */}
    </>
  );
}

export default App;
