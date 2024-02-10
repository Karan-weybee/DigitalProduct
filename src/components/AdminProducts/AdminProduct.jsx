import React,{useEffect, useState} from "react";
import Footer from '../Footer/Footer'
import { useSelector,useDispatch } from "react-redux";
import { fetchProduct, fetchProducts } from "../../slices/productSlice";

const AdminProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.productSlice.Products)
    console.log(products)

    useEffect(()=>{
      dispatch(fetchProducts());
    },[])

  const showProductDetails = (id) => {
    dispatch(fetchProduct(id)).then(()=>{
            document.getElementById("adminProductDetails").style.display ='block';
    })
  };
 
  const openAddProduct = ()=>{

    document.getElementById("ProductAdd").style.display ='block';
  }

  const openEditProduct = ()=>{
 
    document.getElementById("ProductEdit").style.display ='block';
  }
  return (
    <>
     <div className="shop">
        <div className="container">
              <div className="shop-header">
                <div className="shop-header__view">
                  <div className="shop-header__view__icon">
                    <a className="active" href="#">
                      <i className="fas fa-th"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-bars"></i>
                    </a>
                  </div>
                  <h5 className="shop-header__page">
                   <button className="btn -light-green m-4" onClick={openAddProduct}> Add Product</button>
                  </h5>
                 
                </div>
                <select className="customed-select m-4" name="#">
                  <option value="az">A to Z</option>
                  <option value="za">Z to A</option>
                  <option value="low-high">Low to High Price</option>
                  <option value="high-low">High to Low Price</option>
                </select>
              </div>
              <div className="shop-products">
                <div className="shop-products__gird">
                  <div className="row mx-n1 mx-lg-n3">

                    {products && (
                        products.map((product)=>(
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="product">
                        <div className="product-type">
                          <h5 className="-new">New</h5>
                        </div>
                        <div className="product-thumb">
                          <a
                            className="product-thumb__image"
                            href="/shop/product-detail.html"
                          >
                            <img
                              src={product.productImage}
                              alt="Product image"
                            />
                            <img
                              src={product.productImage}
                              alt="Product image"
                            />
                          </a>
                          <div className="product-thumb__actions">
                           
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round product-qv"
                                onClick={()=>showProductDetails(product.id)}
                              >
                                <i className="fas fa-pencil-alt "></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
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
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            {product.discription}
                          </a>
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
                        ))
                    )}
                  </div>
                </div>
                
              </div>
              <ul className="paginator">
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">
                    <i className="far fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
            </div>
            <Footer />
    </>
  );
};

export default AdminProduct;
