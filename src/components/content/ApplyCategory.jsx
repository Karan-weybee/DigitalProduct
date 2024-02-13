import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCategories } from '../../slices/productSlice';

const ApplyCategory = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.productSlice.categories);
    
    const removeCategory=(tag)=>{
        console.log(tag)
        dispatch(removeCategories(tag))
    }
    return (
        <div>
            <div className="shop-header">
                <div className="shop-header__view">
                  <div className="shop-header__view__icon">
                    <label htmlFor="">Tag</label>
                  </div>
                  <h5 className="shop-header__page">
                    {
                        categories && (
                        <ul >
                         {categories.map((tag)=>(
                           <li >{tag} <button onClick={()=>removeCategory(tag)}>X</button></li>
                         ))
                         }
                         </ul>
                      )
                    }
                  </h5>
                </div>
                <select className="customed-select" name="#" style={{display:'none'}}>
                  <option value="az">A to Z</option>
                  <option value="za">Z to A</option>
                  <option value="low-high">Low to High Price</option>
                  <option value="high-low">High to Low Price</option>
                </select>
              </div>
        </div>
    );
}

export default ApplyCategory;
