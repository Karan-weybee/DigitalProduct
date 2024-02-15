import React, { useEffect, useState } from "react";
import DropDownTag from "./DropDownTag";
import { useDispatch,useSelector} from "react-redux";
import { addProduct, fetchProducts } from "../../slices/productSlice";
// import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
    const dispatch = useDispatch();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price,setPrice]=useState('');
  const [singleImage,setSingleImage]=useState('')
  const [multipleImage,setMultipleImage]=useState('')
  const [isError,setIsError]=useState('');


  const closeAddProduct = () => {
    setIsError('');

    dispatch(fetchProducts()).then(()=>{
        document.getElementById("ProductAdd").style.display = "none";
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    if(event.key != 'Enter'){
        if(selectedOptions.length == 0){
            setIsError('Please apply tags ..')
        }
        else{
            setIsError('')
        
        var tags = selectedOptions.map((option)=>option.value).join(',')
        console.log(singleImage)
        console.log([...multipleImage])
        var Images= [...multipleImage]
        const formData = new FormData();

        Images.forEach((file) => {
            formData.append(`featureImages`, file);
        });
        // Append form data to the FormData object
        formData.append('file', singleImage);
        formData.append('tags', tags);
        // formData.append(`featureImages`, [...multipleImage]);
        formData.append('productJson', `{"Name": "${name}","Discription":"${discription}","Price":${price}}`);

        dispatch(addProduct(formData))
        alert("Product added !!");
    }
    }
  };

  const handleImageChange = (event) => {
    // Get the selected image file
    const selectedImage = event.target.files[0];
    setSingleImage(selectedImage);
  };

  const multiImageChange = (event)=>{
    const selectedImage = event.target.files;
    setMultipleImage(selectedImage);
  }
  return (
    <div
      className="jquery-modal blocker current"
      id="ProductAdd"
      style={{ opacity: "1", display: "none", zIndex: "80" }}
    >
      <div
        className="modal"
        id="quick-view-modal"
        style={{ opacity: "1", display: "inline-block", width: "75vw" }}
      >
        <div className="product-quickview show">
          <div className="container">
            <div className="row">
              <a
                href="#close-modal"
                rel="modal:close"
                class="close-modal "
                style={{ top: "9.5px", right: "11.5px" }}
                onClick={closeAddProduct}
              >
                Close
              </a>
              <div className="col-12 col-md-6 mx-auto">
                <div className="cta__form">
                  <div
                    className="section-title"
                    style={{ marginBottom: "1.875em" }}
                  >
                    <h2>Add Product</h2>
                    
                    <img
                      src="assets/images/introduction/IntroductionOne/content-deco.png"
                      alt="Decoration"
                    />
                  </div>
                
                  <div>
                <form className="cta__form__detail validated-form" id="myForm" onSubmit={handleSubmit}>
                      <div className="input-validator">
                      <label htmlFor="" style={{display:'block',marginBottom:'10px'}}> Name :</label>
                        <input
                          type="text"
                          placeholder="Product name"
                          name="name"
                          required
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </div>
                      <div className="input-validator">
                      <label htmlFor="" style={{display:'block',marginBottom:'10px'}}> Discription :</label>
                       <input
                          type="text"
                          placeholder="Product discription"
                          name="discription"
                          required="required"
                          value={discription}
                          onChange={(e)=>setDiscription(e.target.value)}
                        />
                      </div>
                      <div className="input-validator"  >
                      <label htmlFor="" style={{display:'block',marginBottom:'10px'}}> price :</label>
                        <input
                          type="number"
                          placeholder="Product price"
                          name="price"
                          required="required"
                          value={price}
                          min={1}
                          onChange={(e)=>setPrice(e.target.value)}
                        />
                      </div>
                      <div className="input-validator"  >
                      <label htmlFor="" style={{display:'block',marginBottom:'10px'}}>Product image :</label>
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
                      </div>
                      <div className="input-validator"  >
                      <label htmlFor="" style={{display:'block',marginBottom:'10px'}}>Featured images :</label>
                        <input
                        className="p-0"
                          type="file"
                          placeholder="Product price"
                          name="multipleImages"
                          required="required"
                          id="multipleImages"
                          accept="image/*"
                          onChange={multiImageChange} 
                          multiple 
                        />
                      </div>

                      <div className="input-validator"  >
                      <label htmlFor="" style={{display:'block',marginBottom:'10px'}}>Tags :
                       {isError!='' && (
                        <span style={{color:'red'}}>{isError}</span>
                       )}
                      </label>
                        <DropDownTag selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
                      </div>

                      <button
                      id="formSubmit"
                      type="submit"
                        style={{ margin: "0 10px 10px 0" ,background:'#198754',color:'white'}}
                        className="btn btn-light-success"
                      >
                        Submit
                      </button>
                    </form>
                    
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AddProduct;
