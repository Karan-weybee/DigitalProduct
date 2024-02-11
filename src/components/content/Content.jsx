import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Categories from "./Categories";
import Pagination from "./Pagination";
import ApplyCategory from "./ApplyCategory";
import { useDispatch,useSelector } from "react-redux";
import { fetchProduct, fetchProducts } from "../../slices/productSlice";
import { addWishList, fetchWishList, removeWishList } from "../../slices/wishListSlice";
import {checkCommonElement} from '../../../src/helper/helper'
import { Link } from "react-router-dom";

const Content = () => {
  const user = useSelector(state=>state.userSlice.user)
  const priceRange = useSelector(state=>state.productSlice.pricerange)
  console.log(priceRange)
  const [price,setPrice] = useState([0,10000])
  console.log(price)
  const search = useSelector(state=>state.productSlice.search);
  console.log(search)
  const category= useSelector(state=>state.productSlice.categories);
  const dispatch = useDispatch();
  const [ids,setIds]=useState([])
  const {Products} = useSelector(state => state.productSlice)
  console.log(Products)

  useEffect(()=>{
     if(priceRange){
      console.log("sgdhghjggh")
      setPrice(priceRange)
     }
  },[priceRange])
  const showProductDetails = (id) => {
    dispatch(fetchProduct(id));
    document.getElementById("productDetails").style.display = "block";
  };

  useEffect(()=>{
    dispatch(fetchProducts());
   
  },[])

  useEffect(()=>{
    console.log("user",user)
  },[user])
  
  useEffect(()=>{
  if(user){
  dispatch(fetchWishList(user))
  }
  else{
    setIds(()=>[])
  }
  },[user])

 const wishList = useSelector(state=>state.wishListSlice.wishList)
 console.log(wishList)

 useEffect(()=>{
if(wishList.length>0){
  var id=[];
  wishList.forEach(wish => {
    id.push(wish.productId)
 })
setIds(id)
}
 },[wishList])
 
 const removeWish = (id)=>{
  dispatch(removeWishList({uid:user,pid:id})).then(()=>{
    dispatch(fetchWishList(user))
  })
 }

 const addWish=(id)=>{
  if(!user){
    document.getElementById("loginModal").style.display = "block";
  }
  else{
    dispatch(addWishList({
      "UserId":user,
      "ProductId":id
  })).then(()=>{
    dispatch(fetchWishList(user))
  })
  }
 }
  return (
    <div id="content" style={{ marginTop: "1.5em" }}>
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="shop-sidebar">
                <Categories/>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <ApplyCategory/>
              <div className="shop-products">
                <div className="shop-products__gird">
                  <div className="row">

                    {Products.length > 0 && 
                    Products.map((product)=>(
                      <>
                      {checkCommonElement(category,product.tags) && (<>
                      {product.name.toLowerCase().includes(search.toLowerCase()) && (
                        <>
                       { (price  && product.price>=price[0] &&product.price<price[1]) && (
                        
                    <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                      <div className="product">
                        {/* <div className="product-type">
                          <h5 className="-new">New</h5>
                        </div> */}
                        <div className="product-thumb">
                          <Link
                            className="product-thumb__image"
                          >
                            <img
                              src={product.productImage}
                              alt="Product image"
                            />
                            <img
                              src={product.productImage}
                              alt="Product image"
                            />
                          </Link>
                          <div className="product-thumb__actions">
                           
                            <div className="product-btn">
                              <Link
                                className="btn -white product__actions__item -round product-qv"
                                onClick={()=>showProductDetails(product.id)}
                              >
                                <i className="fas fa-eye"></i>
                              </Link>
                            </div>

                            {!ids.includes(product.id) && (
                            <div className="product-btn">
                              <Link
                                className="btn -white product__actions__item -round"
                                onClick={()=>addWish(product.id)}
                              >
                                <i className="fas fa-heart"></i>
                              </Link>
                            </div>
                              )}
                              {ids.includes(product.id) && (
                            <div className="product-btn">
                              <Link style={{background:'red',color:'white'}}
                                className="btn -white product__actions__item -round"
                                onClick={()=>removeWish(product.id)}
                              >
                                <i className="fas fa-heart"></i>
                              </Link>
                            </div>
                              )}
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-content__header">
                            <div className="product-category">{product.name}</div>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <Link
                            className="product-name"
                          >
                            {product.discription}
                          </Link>
                          <div className="product-content__footer">
                            <h5 className="product-price--main">${product.price}</h5>
                            <div className="product-colors">
                              <div
                                className="product-colors__item"
                                style={{ backgroundColor: "#8b0000" }}
                              ></div>
                              <div
                                className="product-colors__item"
                                style={{ backgroundColor: "#4169e1" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    )}</>
                    )}
                    </>)}
                    </>))
                     
                    }
                   
                    
                    {/* <div className="product-type">
                          <h5 className="-sale">-15%</h5>
                        </div> */}
                  </div>
                </div>
              </div>

              <Pagination/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
     
    </div>
  );
};

export default Content;
