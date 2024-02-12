import React,{useEffect, useState} from 'react';
import DropDownTag from '../Product/DropDownTag';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../slices/productSlice';
import '../../assets/css/priceRange.css'
import PriceRangeSlider from './PriceRangeSlider';

const Categories = () => {
  
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState();
  
  useEffect(()=>{
    if(selectedOptions){
    var tags = selectedOptions.map((option)=>option.value);
    dispatch(setCategories(tags));
    }
  },[selectedOptions])

    const openFilter = () => {
        // document.getElementById("categoryFilter").style.bottom = "-0%";
        document.getElementById("categoryFilter").style.animationName =
          "openFilter";
        setTimeout(() => {
          document.getElementById("categoryFilter").style.bottom = "0%";
        }, 2000);
        document.getElementById("filter").style.bottom = "-4%";
      };
    
      const closeFilter = () => {
        document.getElementById("categoryFilter").style.animationName =
          "closeFilter";
        setTimeout(() => {
          document.getElementById("categoryFilter").style.bottom = "-90%";
        }, 2000);
        document.getElementById("filter").style.bottom = "0%";
      };
    return (
        <div>
            <div className="shop-sidebar__content" id="categoryFilter">
                  <div className="shop-sidebar__section -categories">
                    <div id="filter">
                      <button
                        style={{ background: "white", padding: "5px 10px" }}
                      >
                        SORT
                      </button>
                      <button
                        onClick={openFilter}
                        style={{ background: "white", padding: "5px 10px" }}
                      >
                        FILTER
                      </button>
                    </div>
                    <div
                      className="section-title -style1 -medium"
                      style={{ marginBottom: "1.875em" }}
                    >
                      <h2>Tags :-</h2>
                      <img
                        src="assets/images/introduction/IntroductionOne/content-deco.png"
                        alt="Decoration"
                      />
                      <a
                        onClick={closeFilter}
                        href="#close-modal"
                        rel="modal:close"
                        class="close-modal "
                        id="closeFilter"
                      >
                        Close
                      </a>
                    </div>
                  </div>
                  <div className="shop-sidebar__section -refine">
                   
                    <div className="shop-sidebar__section__item">
                    <DropDownTag selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
                     
                      {/* <h5>Brand</h5> */}
                      {/* <ul>
                        <li>
                          <label htmlFor="brand-0">
                            <input type="checkbox" name="Gucci" id="brand-0" />
                            Gucci
                          </label>
                        </li>
                        <li>
                          <label htmlFor="brand-1">
                            <input type="checkbox" name="Dolce" id="brand-1" />
                            Dolce
                          </label>
                        </li>
                        <li>
                          <label htmlFor="brand-2">
                            <input
                              type="checkbox"
                              name="H&amp;M"
                              id="brand-2"
                            />
                            H&amp;M
                          </label>
                        </li>
                        <li>
                          <label htmlFor="brand-3">
                            <input type="checkbox" name="Kenzo" id="brand-3" />
                            Kenzo
                          </label>
                        </li>
                        <li>
                          <label htmlFor="brand-4">
                            <input type="checkbox" name="Prada" id="brand-4" />
                            Prada
                          </label>
                        </li>
                      </ul> */}
                    </div>
                    <div className="shop-sidebar__section__item">
                      <h5>Price</h5>
                     <PriceRangeSlider/>
                    </div>
                  </div>
                </div>
        </div>
    );
}

export default Categories;
