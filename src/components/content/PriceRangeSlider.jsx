import React, { useEffect, useState } from 'react';
import Slider from 'react-slider';
import '../../assets/css/priceRange.css'
import { useDispatch } from 'react-redux';
import { applyPriceRange } from '../../slices/productSlice';

function PriceRangeSlider() {
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const maxLimit = 10000;
 
  const handlePriceRangeChange = (value) => {
    setPriceRange(value)
   
    dispatch(applyPriceRange(value));
    
  };

  return (
    <div className="price-range-slider" style={{marginTop:'1em',position:'relative',zIndex:'0'}}>
      <label htmlFor="priceRange">Price Range:</label>
      <Slider
        min={0}
        max={maxLimit}
        value={priceRange} 
        onChange={handlePriceRangeChange}
        className="custom-slider"
      />
      <span className="price-range-text">{priceRange[0]} - {priceRange[1]}</span>
    </div>
  );
}

export default PriceRangeSlider;
