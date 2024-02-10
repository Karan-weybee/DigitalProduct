import React,{useEffect, useState} from 'react';
import Select from 'react-select';
import { useDispatch,useSelector } from 'react-redux';
import { fetchTags } from '../../slices/tagSlice';

const DropDownTag = ({selectedOptions,setSelectedOptions}) => {
  const dispatch = useDispatch();
  const [createValue,setCreateValue]=useState('')
  const [customOptions,setCustomOptions]=useState([]);
//   var customOptions = [
    // { value: 'bueaty', label: 'Bueaty' },
    // { value: 'soap', label: 'Soap' },
    // Add more options as needed
//   ];

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

  const createOption = (inputValue) => ({
    value: inputValue.toLowerCase(),
    label: inputValue,
  });

  const handleCreateOption = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log("create")
        if(createValue.trim('') !== ''){
            setSelectedOptions([...selectedOptions, createOption(createValue)]);
        }
    }
  };

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
                       onKeyDown={handleCreateOption}
                         placeholder="Tags"
                       isClearable
                      closeMenuOnSelect={false}
                     />
        </div>
    );
}

export default DropDownTag;
