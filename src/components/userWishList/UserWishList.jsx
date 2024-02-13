import React, { useEffect,useRef } from 'react';
import Footer from '../Footer/Footer';
import { useDispatch,useSelector } from 'react-redux';
import { downloadPdf, fetchWishList, removeWishList, resetPdf } from '../../slices/wishListSlice';
import { useNavigate } from 'react-router-dom';
import Pagination from '../content/Pagination';
import { Link } from 'react-router-dom';
import { resetUserId } from '../../slices/userSlice';
import { createPdf } from '../../assets/js/pdf';

const UserWishList = () => {
    const pdf = useSelector(state=>state.wishListSlice.pdf)
    const divRef = useRef(null);
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
   useEffect(()=>{
    if(!user){
        nevigater('/')
        dispatch(resetUserId())
        }
   },[user])

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

   const generatePdf = async () => {
    try {
    //   const htmlContent = divRef.current.innerHTML;

    var products = []
    const product = wishproducts.map((product)=>products.push({Name : product.name,Image : product.productImage,Price : product.price,Discription:product.discription}))
    console.log(products)
    createPdf(products)
    //   const htmlContent=createPdf(products)
      const htmlContent=createPdf(products)
      dispatch(downloadPdf(htmlContent))
    
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  useEffect(()=>{
    if(pdf){
        console.log(pdf)
        const blobUrl = URL.createObjectURL(pdf);

    // Create an anchor element
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = 'generated.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);

    dispatch(resetPdf())
    }
  },[pdf])

    return (
            <>
             <div className="shop" style={{marginTop:'2em'}} >
                <div className="container" ref={divRef}>
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
                                  <Link
                                    className="product-thumb__image"
                                  >
                                    <img
                                      src={wishproduct.productImage}
                                      alt="Product image"
                                    />
                                    <img
                                      src={wishproduct.productImage}
                                      alt="Product image"
                                    />
                                  </Link> 
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
                                  <Link
                                    className="product-name"
                                  >
                                 {wishproduct.discription}
                                  </Link>
                                  <div className="product-content__footer">
                                    <h5 className="product-price--main">${wishproduct.price}</h5>
                                    
                                    <div className="product-colors" >
                               <Link onClick={()=>removeItem(wishproduct.id)} 
                               style={{background:'red',color:'white',padding:'10px 17px',cursor:'pointer'}}
                                className="btn -white product__actions__item -round" >
                                <i className="fas fa-heart" style={{marginTop:'6px',marginLeft:'2px'}}></i>
                              </Link>
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
                        <button className='btn btn-light-success' style={{background:'green',color:'white'}} onClick={generatePdf}>Download</button>
                      </div>
                    </div>
                    </div>
                    <Footer />
            </>
          );
}

export default UserWishList;
