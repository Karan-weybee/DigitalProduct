import React from 'react';
import '../../assets/css/priceRange.css'
import PriceRangeSlider from './PriceRangeSlider';
import SearchDropDown from './SearchDropDown';

const Categories = () => {

    const openFilter = () => {
        document.getElementById("categoryFilter").style.animationName =
          "openFilter";
        setTimeout(() => {
          document.getElementById("categoryFilter").style.bottom = "0%";
        }, 1500);
        document.getElementById("filter").style.bottom = "-4%";
      };
    
      const closeFilter = () => {
        document.getElementById("categoryFilter").style.animationName =
          "closeFilter";
        setTimeout(() => {
          document.getElementById("categoryFilter").style.bottom = "-93%";
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
                    {/* <DropDownTag selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/> */}
                    <SearchDropDown/>
                     
                    </div>
                    <div className="shop-sidebar__section__item">
                    <h2 style={{fontWeight:'500',marginBottom:'0.2em'}}>Price :-</h2>
                      <img
                        src="assets/images/introduction/IntroductionOne/content-deco.png"
                        alt="Decoration"
                      />
                     <PriceRangeSlider/>
                    </div>
                  </div>
                </div>
        </div>
    );
}

export default Categories;
