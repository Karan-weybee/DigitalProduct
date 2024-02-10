import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addWishList, fetchWishList, removeWishList } from "../../slices/wishListSlice";
import MagnifierZoomImage from "./MagnifierZoomImage";


const Modal = () => {

  const user = useSelector(state=>state.userSlice.user)
  const dispatch = useDispatch();
  const [ids,setIds]=useState([])
  const [url,setUrl]=useState("");
  const product = useSelector(state=>state.productSlice.Product)
  console.log(product)
  const closeProductDetails = () => {
    document.getElementById("productDetails").style.display = "none";
  };
 
  useEffect(()=>{
    setUrl(product.productImage)
  },[product])
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
    <>
      <div
        className="jquery-modal blocker current"
        id="productDetails"
        style={{ opacity: "1", display: "none", zIndex: "80" }}
      >
        <div
          className="modal"
          id="quick-view-modal"
          style={{
            opacity: "1",
            display: "inline-block",
            height: "77%",
            overflow: "scroll",
          }}
        >
          {/* <div className="modal" id="quick-view-modal" style={{ opacity: "1",display:'none' }}> */}
          <div className="product-quickview show">

            {product && (
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="product-detail__slide-one">
                  <div className="slider-wrapper slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable" id="zoomId" style={{ width: '692px',
                 zIndex:'90'}}>
                     {url && (
                          // <img
                          //   id="ImageForZoom"
                          //   className="slick-list draggable"
                          //   style={{margin:'auto'}}
                          //   src={url}
                          //   alt="Product image"
                          // />
                          <MagnifierZoomImage url={url}/>
                          )}
                        
                    </div>
                   
                    <div
                      style={{
                        marginTop: "2em",
                        display: "flex",
                        maxWidth: "600px",
                        overflow: "scroll",
                        overflowY: "unset",
                        gap: "5px",
                      }}
                    >
                      <img
                        style={{ height: "150px" }}
                        src={product.productImage}
                        alt="Product image"
                        onClick={()=>setUrl(product.productImage)}
                      />
                      {
                        product.featureImages && 
                        product.featureImages.map((image)=>(
                        <img
                        style={{ height: "150px" }}
                        src={image}
                        alt="Product image"
                        onClick={()=>setUrl(image)}
                      />
                        ))
                      }
                       
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6" id="zoomImage">
                <div className="product-detail__content">
                  <div className="product-detail__content__header">
                    <h5>{product.name}</h5>
                    <h2>{product.discription}</h2>
                  </div>
                  <div className="product-detail__content__header__comment-block">
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>03 review</p>
                    <a href="#">Write a reviews</a>
                  </div>
                  <h3>${product.price}</h3>
                  <div className="divider" style={{margin:'1.125rem 0'}}></div>
                  <div style={{marginBottom:'1em',fontSize:'20px'}}>Tags :</div>
                  <div className="product-detail__content__footer" id="tags">
                    <ul>
                      { product.tags&&
                        product.tags.map((tag)=>(
                      <>
                      <li><span>{tag}</span></li>
                      </>
                      ))
                    }
                    </ul>
                    <div className="product-detail__colors">
                      <span>Color:</span>
                      <div
                        className="product-detail__colors__item"
                        style={{ backgroundColor: "#8b0000" }}
                      ></div>
                      <div
                        className="product-detail__colors__item"
                        style={{ backgroundColor: "#4169e1" }}
                      ></div>
                    </div>
                    {!ids.includes(product.id) && (
                      <div className="product-detail__controller" style={{justifyContent:'left'}}>
                      <div className="product-detail__controler__actions"></div>
                      <a className="btn -round -white" onClick={()=>addWish(product.id)}>
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                              )}
                              {ids.includes(product.id) && (
                            <div className="product-detail__controller" style={{justifyContent:'left'}}>
                      <div className="product-detail__controler__actions"></div>
                      <a style={{background:'red',color:'white'}} className="btn -round -white"  onClick={()=>removeWish(product.id)}>
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                              )}
                    
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          <a
            href="#close-modal"
            rel="modal:close"
            class="close-modal "
            style={{ top: "5.5px", right: "11.5px" }}
            onClick={closeProductDetails}
          >
            Close
          </a>
        </div>
      </div>

      {/* <div class="drawer-backdrop fade show" id="fade-right"></div> */}
    </>
  );
};

export default Modal;
