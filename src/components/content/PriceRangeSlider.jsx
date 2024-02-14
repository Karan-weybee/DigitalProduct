import React, { useEffect, useState } from 'react';
import Slider from 'react-slider';
import '../../assets/css/priceRange.css'
import { useDispatch, useSelector } from 'react-redux';
import { applyPriceRange } from '../../slices/productSlice';

function PriceRangeSlider() {
  const dispatch = useDispatch();
  const range = useSelector(state=>state.productSlice.minmax);
  console.log(range)

  const [priceRange, setPriceRange] = useState([]);
  const [maxLimit,setMaxLimit]=useState();
  const [minLimit,setMinLimit]=useState();
  
  // const maxLimit = 10000;
 
  const handlePriceRangeChange = (value) => {
    setPriceRange(value)
    dispatch(applyPriceRange(value));
  };

  useEffect(()=>{
  if(range){
   setMinLimit(range[0])
   setMaxLimit(range[1])
   setPriceRange([range[0],range[1]])
  }
  },[range])

  return (
    <div className="price-range-slider" style={{marginTop:'1em',position:'relative',zIndex:'0'}}>
      <label htmlFor="priceRange">Price Range:</label>
      <Slider
        min={minLimit}
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
