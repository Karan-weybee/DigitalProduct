import React,{useEffect, useState} from 'react';
import Select from 'react-select';
import { useDispatch,useSelector } from 'react-redux';
import { fetchTags } from '../../slices/tagSlice';

const SearchDropDown = ({selectedOptions,setSelectedOptions}) => {
  const dispatch = useDispatch();
  const [createValue,setCreateValue]=useState('')
  const [customOptions,setCustomOptions]=useState([]);
  const handleChange = (selectedOptions) => {
    console.log("hii")
    setSelectedOptions(selectedOptions);
  };

  useEffect(()=>{
    dispatch(fetchTags());
  },[])
 const alltags = useSelector(state=>state.tagSlice.tags);

 var Alltag =[];
useEffect(()=>{
   if(alltags.length>0){
    Alltag =[];
     alltags.forEach(tag => {
        Alltag.push({ value:tag.name, label: tag.name })
     });
     setCustomOptions(Alltag)

   }
},[alltags])

console.log(customOptions)


  const handleInputChange=(newValue)=>{
    // console.log(newValue)
    setCreateValue(newValue)
  }

    return (
        <div>
             <Select
              isMulti
              options={customOptions}
              value={selectedOptions}
              onChange={handleChange}
              onInputChange={handleInputChange}
                placeholder="Tags"
              isClearable
             closeMenuOnSelect={false}
             />
        </div>
    );
}

export default SearchDropDown;
