import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import { useDispatch,useSelector } from 'react-redux';
import { fetchWishList, removeWishList } from '../../slices/wishListSlice';
import { useNavigate } from 'react-router-dom';
import Pagination from '../content/Pagination';

const UserWishList = () => {
    const nevigater = useNavigate();
   const user = useSelector(state=>state.userSlice.user);
   const dispatch = useDispatch();
   const products = useSelector(state=>state.productSlice.Products)

   useEffect(()=>{
    if(!user){
    nevigater('/')
    }
      dispatch(fetchWishList(user))
   },[])
   
   const wishList = useSelector(state=> state.wishListSlice.wishList);
   var ids = [];
   if(wishList.length>0){
    
   wishList.forEach(wish => {
    ids.push(wish.productId)
 });
}

   var wishproducts= products.filter((product)=> ids.includes(product.id));
   console.log(wishproducts)

   const removeItem=(productId)=>{
        console.log("remove",productId)
        dispatch(removeWishList({uid:user,pid:productId})).then((result) => {
            dispatch(fetchWishList(user))
        })
   }
    return (
            <>
             <div className="shop" style={{marginTop:'2em'}}>
                <div className="container">
                      <div className="shop-products">
                        <div className="shop-products__gird">
                          <div className="row mx-n1 mx-lg-n3">
                          {
                            wishproducts && 
                            wishproducts.map((wishproduct)=>(
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
                                      src={wishproduct.productImage}
                                      alt="Product image"
                                    />
                                    <img
                                      src={wishproduct.productImage}
                                      alt="Product image"
                                    />
                                  </a> 
                                </div>
                                <div className="product-content">
                                  <div className="product-content__header">
                                    <div className="product-category">{wishproduct.name}</div>
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
                                 {wishproduct.discription}
                                  </a>
                                  <div className="product-content__footer">
                                    <h5 className="product-price--main">${wishproduct.price}</h5>
                                    
                                    <div className="product-colors" >
                               <a onClick={()=>removeItem(wishproduct.id)} 
                               style={{background:'red',color:'white',padding:'10px 17px',cursor:'pointer'}}
                                className="btn -white product__actions__item -round" >
                                <i className="fas fa-heart" style={{marginTop:'6px',marginLeft:'2px'}}></i>
                              </a>
                             </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                             )) 
                            }
                          </div>
                        </div> 
                      </div>
                      <Pagination/>
                      <div className='download' style={{marginTop:'1em'}}>
                        <button className='btn btn-light-success' style={{background:'green',color:'white'}}>Download</button>
                      </div>
                    </div>
                    </div>
                    <Footer />
            </>
          );
}

export default UserWishList;
