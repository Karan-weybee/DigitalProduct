import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactImageZoom from "react-image-zoom";

import zoomImage from "../../../src/assets/images/product/4.png";
import { useSelector,useDispatch } from "react-redux";
import closeImage from '../../assets/images/close-image.png'
import { addFeatureImages, fetchProduct } from "../../slices/productSlice";

const AdminModal = () => {
    const dispatch = useDispatch();

  
  const product = useSelector(state=>state.productSlice.Product);
  console.log(product)

//   var productImage=product.productImage;
  const [productImage,setProductImage]=useState(product.productImage);
  const [featureImages,setFeatureImages]=useState(product.featureImages);
  const [ids,setIds]=useState([]);

  useEffect(()=>{
    setProductImage(product.productImage);
    setFeatureImages(product.featureImages);
  },[])


  
  console.log(featureImages)
  const [singleProductImage,setSingleProductImage]=useState('');
 
  const [multipleProductImage,setMultipleProductImage]=useState([]);

  const handleImageChange = (event) => {

    const file = event.target.files[0];
    setSingleProductImage(file)
        const reader = new FileReader();

        reader.onload = (e) => {
            setProductImage(e.target.result);
        };

        reader.readAsDataURL(file);
  };

  const handleMultiImages =(event)=>{

    const selectedImage = event.target.files;
    var promises = [];

    for (let i = 0; i < selectedImage.length; i++) {
        const reader = new FileReader();

        const promise = new Promise((resolve, reject) => {
            reader.onload = (e) => {
                resolve(e.target.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };
        });

        reader.readAsDataURL(selectedImage[i]);
        promises.push(promise);
    }

    Promise.all(promises)
        .then((results) => {
            console.log(results); 
            dispatch(addFeatureImages(results))    
        })
        .catch((error) => {
            console.error('Error reading images:', error);
        });


    // setMultipleProductImage((images)=>[...images,...selectedImage]);
  }

 function removeImage(index){
    console.log(index)
    setIds((ids)=>[...ids,index])

   var images = [...product.featureImages];

    for(let i=0;i<ids.length;i++){
        console.log(ids[i]);
        images = images.filter((image,id)=>id!=ids[i]) 
    }
    images = images.filter((image,i)=>i!=index);

    setMultipleProductImage(()=>[]);

    for(let i=0;i<images.length;i++){

   const blob= urlToBlob(images[i])
    .then(blob => {
        return blob;
    })
    .catch(error => {
        console.error(error);
    });
  
    const fileName = images[i].substring(images[i].lastIndexOf('/') + 1);
    const fetchedFile = new File([blob], fileName, { type: blob.type });
 
    console.log(fetchedFile)
    setMultipleProductImage((images)=>[...images,fetchedFile]);
    }
    console.log(images)
  
 }


 function urlToBlob(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error('Failed to load image from URL'));
            }
        };
        xhr.onerror = function () {
            reject(new Error('Failed to load image from URL'));
        };
        xhr.send();
    });
}
  const closeProductDetails = () => {
    setProductImage(product.productImage);
    document.getElementById("adminProductDetails").style.display = "none";
  };
  return (
    <>
      <div
        className="jquery-modal blocker current"
        id="adminProductDetails"
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
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="product-detail__slide-one">
                  <div className="slider-wrapper slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                      <div>
                        <div style={{ width: "270px", margin: "auto",height:'345px',position:'relative' }}>
                            {
                                productImage !='' &&(
                                    <>
                                  {  productImage == undefined && (
                                         <>
                                         <a
                                            href="#close-modal"
                                            rel="modal:close"
                                            class="close-modal "
                                            style={{ top: "2.5px", right: "4.5px" }}
                                            onClick={()=>{setProductImage('')}}
                                        >
                                         Close
                                        </a>
                                    <img
                                      id="ImageForZoom"
                                     src={product.productImage}
                                   // src={zoomImage}
                                   alt="Product image"
                              />
    
                              </>
                                    )}
                                    <>
                                     <a
                                        href="#close-modal"
                                        rel="modal:close"
                                        class="close-modal "
                                        style={{ top: "2.5px", right: "4.5px" }}
                                        onClick={()=>{setProductImage('')}}
                                    >
                                     Close
                                    </a>
                                <img
                                  id="ImageForZoom"
                                 src={productImage}
                               // src={zoomImage}
                               alt="Product image"
                          />

                          </>
                          </> )
                            }
                           {
                           productImage =='' &&(
                            <input
                            className="p-0"
                              type="file"
                              placeholder="Product price"
                              name="singleImage"
                              required="required"
                              id="singleImage"
                              accept="image/*"
                              onChange={handleImageChange} 
                            />
                            )}
                        </div>
                      </div>
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
                       { 
                       product && (
                        <>
                       {featureImages == undefined && (
                       <>{
                        product.featureImages &&(
                            <>{
                          product.featureImages.map((image, index) => (
                            <>
                            { !ids.includes(index) && (
                            <>
                            <span style={{position:'relative'}}>
                              <img
                                  key={index} // Ensure a unique key for each image
                                  style={{ height: "150px" }}
                                  src={image}
                                  alt="Product image"
                              /> 
                               
                           <img  class="close-modal"
                                style={{ position: 'absolute',
                                    top: '3.5px',
                                    right: '4.5px',
                                    padding: '1px',
                                    background: '#edacac',
                                    border: '1px solid black',
                                    borderRadius: '10px',
                                cursor:'pointer' }}
                                 onClick={()=>removeImage(index)} src={closeImage} alt="" />
                             
                             </span>
                              </>   
                              )}
                              </>
                              
                          ))
                            }</>)
                        }
                        
                        
                        </>)}

                        {featureImages != undefined && (
                       <>{
                          featureImages.map((image, index) => (
                            <>
                            <span style={{position:'relative'}}>
                              <img
                                  key={index} // Ensure a unique key for each image
                                  style={{ height: "150px" }}
                                  src={image}
                                  alt="Product image"
                              /> 
                               
                           <img  class="close-modal"
                                style={{ position: 'absolute',
                                    top: '3.5px',
                                    right: '4.5px',
                                    padding: '1px',
                                    background: '#edacac',
                                    border: '1px solid black',
                                    borderRadius: '10px',
                                cursor:'pointer' }}
                                onClick={()=>removeImage(index)} src={closeImage} alt="" />
                             
                             </span>
                              </>   
                          ))
                        }
                        
                        </>)}
                        </>)
                          
                      }

                     
                    </div>

                    <div class="custom-file-input">
                    <input
                        className="p-0"
                          type="file"
                          placeholder="Product price"
                          name="multipleImages"
                          required="required"
                          id="fileInput"
                          accept="image/*"
                          onChange={handleMultiImages} 
                          multiple 
                        />
                        <label for="fileInput">Add images</label>
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
                  <div className="divider"></div>
                  <div className="product-detail__content__footer">
                    <ul>
                      <li>Brand:gucci</li>
                      <li>Product code: PM 01</li>
                      <li>Reward point: 30</li>
                      <li>Availability: In Stock</li>
                    </ul>
                    
                    <div className="product-detail__controller">
                      
                      <div className="add-to-cart -dark">
                        <a className="btn -round -red" href="#">
                          <i className="fas fa-pencil-alt "></i>
                        </a>
                        <h5>Edit</h5>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default AdminModal;
