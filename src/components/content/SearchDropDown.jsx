import React,{useEffect, useState} from 'react';
import Select from 'react-select';
import { useDispatch,useSelector } from 'react-redux';
import { fetchTags } from '../../slices/tagSlice';
import { setCategories } from '../../slices/productSlice';

const SearchDropDown = () => {
    const [selectedOptions,setSelectedOptions]=useState([]);
  const dispatch = useDispatch();
  const selectedtag = useSelector(state=>state.productSlice.categories);
//   console.log(selectedtag)


  const [createValue,setCreateValue]=useState('')
  const [customOptions,setCustomOptions]=useState([]);
  const handleChange = (selectedOptions) => {
    console.log("hii")
    // setSelectedOptions(selectedOptions);
    var tags = selectedOptions.map((option)=>option.value);
    dispatch(setCategories(tags));
  };

  useEffect(()=>{
    if(selectedtag){
        setSelectedOptions(()=>[])
        selectedtag.map((tag)=>setSelectedOptions((option)=>[...option,{ value: tag, label: tag }]))
    }
  },[selectedtag])

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
