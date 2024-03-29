import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector,useDispatch } from "react-redux";
import closeImage from '../../assets/images/close-image.png'
import { addFeatureImages, fetchProduct, fetchProducts, updateProduct } from "../../slices/productSlice";
import DropDownTag from "../Product/DropDownTag";
import { useNavigate } from "react-router-dom";
import image from '../../assets/images/image.png'
import arrow from '../../assets/images/right-arrow.png'
import '../../assets/css/productUpdate.css'

const AdminModal = () => {
    const dispatch = useDispatch();
    const nevigate = useNavigate();
  
  const product = useSelector(state=>state.productSlice.Product);
  console.log(product)

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [name, setName] = useState();
  const [discription, setDiscription] = useState("");
  const [price,setPrice]=useState('');
  const [isError,setIsError]=useState('')
  const [isMultiImageError,setIsMultiImageError] = useState('');

  useEffect(()=>{
  setName(product.name)
  setDiscription(product.discription)
  setPrice(product.price) 
  var tags=[];
  if(product.tags){
  product.tags.forEach(tag => {
    tags.push({ value: tag, label: tag })
  })
}
  setSelectedOptions(tags)
  },[product])

//   var productImage=product.productImage;
  const [productImage,setProductImage]=useState(product.productImage);
  const [featureImages,setFeatureImages]=useState(product.featureImages);
  
  const [ids,setIds]=useState([]);

  useEffect(()=>{
    if(product){
    setProductImage(product.productImage);
    setFeatureImages(product.featureImages);
    }
  },[product])

  console.log(featureImages)
  const [singleProductImage,setSingleProductImage]=useState('');
 
  const [multipleProductImage,setMultipleProductImage]=useState([]);

 
  const handleImageChange = (event) => {

    
    const file = event.target.files[0];
    if(file){
        setIsError('')
    }
    setSingleProductImage(file)
        const reader = new FileReader();

        reader.onload = (e) => {
            setProductImage(e.target.result);
        };

        reader.readAsDataURL(file);
  };

  const handleMultiImages =(event)=>{

    const selectedImage = event.target.files;
    if(selectedImage.length>0){
        setIsMultiImageError('')  
    }
    else{
        setIsMultiImageError('Apply feature image')
    }

    setMultipleProductImage((images)=>[...images,...selectedImage]);
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


  }

 function removeImage(index){
    console.log(index)
  
    var allIdes=[...ids,index];
    setIds((ids)=>[...ids,index])

   var image = [...product.featureImages];
  var images = image.filter((imagess, index) => !allIdes.includes(index));
    
    console.log(images)
    if(images.length ==0){
        setIsMultiImageError("Add some feature image ..")
    }
    
    setMultipleProductImage(()=>[]);

    var promises = [];
  
    for (let i = 0; i < images.length; i++) {
        const promise = urlToBlob(images[i])
            .then(blob => {
                const fileName = images[i].substring(images[i].lastIndexOf('/') + 1);
                return new File([blob], fileName, { type: blob.type });
            })
            .catch(error => {
                console.error(error);
                return null;
            });
  
        promises.push(promise);
    }
  
    Promise.all(promises)
        .then((files) => {
            console.log(files);
            const validFiles = files.filter(file => file !== null);
            setMultipleProductImage((images) => [...images, ...validFiles]);
        });

       
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
    setIsError('')
    setIsMultiImageError('')
    setProductImage(product.productImage);
    setIds(()=>[])
    dispatch(fetchProduct(product.id)).then(()=>{
        dispatch(fetchProducts()).then(()=>{
            document.getElementById("adminProductDetails").style.display = "none";
        })
    })
  };

  const editProduct=()=>{
    console.log("edit")
    var productImg=singleProductImage;

    if(singleProductImage == ''){

        const blob= urlToBlob(product.productImage)
        .then(blob => {
            // return blob;
            const fileName = product.productImage.substring(product.productImage.lastIndexOf('/') + 1);
        const fetchedFile = new File([blob], fileName, { type: blob.type});
        console.log(fetchedFile)
        productImg=fetchedFile;
        applyMultipleImages(productImg);
        
        })
        .catch(error => {
            console.error(error);
        });
      
        
    }else{
        // console.log(singleProductImage)
        applyMultipleImages(productImg);
    }
 
  }

  useEffect(()=>{

    if(name !=''&&discription != ''&&price>0){
        setIsError('');
    }
  },[name,discription,price])
  const applyMultipleImages =(productImg)=>{
    if (multipleProductImage.length === 0) {
        var images = [];
        var promises = [];
    
        for (let i = 0; i < product.featureImages.length; i++) {
            const promise = urlToBlob(product.featureImages[i])
                .then(blob => {
                    const fileName = product.featureImages[i].substring(product.featureImages[i].lastIndexOf('/') + 1);
                    const fetchedFile = new File([blob], fileName, { type: blob.type });
                    images.push(fetchedFile);
                })
                .catch(error => {
                    console.error(error);
                });
    
            promises.push(promise);
        }
        Promise.all(promises)
            .then(() => {
                console.log(images);
               //multiple image is images
               editProducts(images,productImg)
            });
    }else{
        // multiple image is available
        editProducts(multipleProductImage,productImg)
    }
  }
   const editProducts = (multipleProductImage,productImg)=>{
   if(selectedOptions.length!= 0 && name != '' && discription != '' && price > 0){
    if(isError == '' && isMultiImageError == ''){
     setIsError('');
     setIsMultiImageError('')
    console.log(multipleProductImage)
    console.log("name :",name);
    console.log("discr.",discription);
    console.log("price:",price),
    console.log(selectedOptions)
    console.log(productImg)

    var tags = selectedOptions.map((option)=>option.value).join(',')
    var Images= [...multipleProductImage]
    const formData = new FormData();

    Images.forEach((file) => {
        formData.append(`featureImages`, file);
    });
    // Append form data to the FormData object
    formData.append('file', productImg);
    formData.append('tags', tags);
    // formData.append(`featureImages`, [...multipleImage]);
    formData.append('productJson', `{"Id": ${product.id},"Name": "${name}","Discription":"${discription}","Price":${price}}`);
   
    dispatch(updateProduct({"formData":formData,"id":product.id})).then(()=>{
        dispatch(fetchProduct(product.id));
    })
    dispatch(fetchProducts()).then(()=>{
        closeProductDetails();
    })
     }
   }  
   else{
    setIsError("Fill all valid data ...")
   }
  
   }
    
  
  return (
    <>
      <div
        className="jquery-modal blocker current"
        id="adminProductDetails"
        style={{ opacity: "1", display: "none", zIndex: "80" }}
      >
        <div
          className="modal editProductModal"
          id="quick-view-modal"
          style={{
            opacity: "1",
            display: "inline-block",
            height: "77%"
          }}
        >
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
                                            id="closeImage"
                                            rel="modal:close"
                                            class="close-modal "
                                            style={{ top: "2.5px",left:'0%' }}
                                            onClick={()=>{setIsError("Apply product image"),setProductImage('')}}
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
                                    {  productImage != undefined && (
                                         <>
                                         <a
                                            href="#close-modal"
                                            id="closeImage"
                                            rel="modal:close"
                                            class="close-modal "
                                            style={{ top: "2.5px",left:'0%' }}
                                            onClick={()=>{setIsError("Apply product image"),setProductImage('')}}
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
                                    )}
                                    <>
                                     <a
                                        href="#close-modal"
                                        rel="modal:close"
                                        class="close-modal "
                                        style={{ top: "2.5px",left:'0%'}}
                                        onClick={()=>{setIsError("Apply product image"),setProductImage('')}}
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
                            <div className="upload-image">
                             <label for="singleImage" class="file-label">
                            <img src={image} alt="" srcset="" />
                            </label>
                            <input
                            className="p-0 singleImage"
                              type="file"
                              placeholder="Product price"
                              name="singleImage"
                              required="required"
                              id="singleImage"
                              accept="image/*"
                               
                              onChange={handleImageChange} 
                            />
                            </div>
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
                                </>)}
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
                    {/* <h5>{product.name}</h5> */}
                    <input type="text" placeholder="Enter product name" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} style={{fontSize:'20px',paddingTop:'5px',marginBottom:'0.5em',borderRadius:'8px',border:'2px solid rgb(243 239 239)'}}/>
                    <input type="text" placeholder="Enter product discription" name="" id="" value={discription} onChange={(e)=>setDiscription(e.target.value)} style={{fontSize:'16px',border:'1px solid rgb(243 239 239)', padding:'5px',borderRadius:'8px',marginBottom:'1.3em',width:'100%'}}/>
                    
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
                  <h3>$<input type="number" min={1} name="" id="" value={price} onChange={(e)=>setPrice(e.target.value)} style={{border:'1px',marginBottom:'1em'}}/>
                    </h3>
                  <div className="divider"></div>
                  <div style={{marginBottom:'1em'}}>
                 < label htmlFor="" style={{display:'block',marginBottom:'1em'}}>Tags :</label>
                   <DropDownTag selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
                </div>   
               
                  <div className="product-detail__content__footer" style={{marginTop:'1em'}}>
                    <ul>
                      <li>Brand:gucci</li>
                      <li>Product code: PM 01</li>
                      <li>Reward point: 30</li>
                      <li>Availability: In Stock</li>
                    </ul>
                    <div>
                    {isError != ''&& (
                        <div style={{display:'flex',gap:'10px'}}><img src={arrow} alt="" />
                    <span style={{color:'red',paddingTop:'4px'}}>{isError}</span>
                    </div>
                    )}
                    {isMultiImageError != '' && (
                    <>
                          <div style={{display:'flex',gap:'10px',marginTop:'10px'}}><img src={arrow} alt="" />
                          <span style={{color:'red',paddingTop:'4px'}}>{isMultiImageError}</span>
                          </div>
                          </>
                    )}
                    </div>
                    <div className="product-detail__controller" style={{marginTop:'1em'}}>
                    
                      <div className="add-to-cart -dark" >
                        <a onClick={editProduct} className="btn -round -red" href="#">
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
