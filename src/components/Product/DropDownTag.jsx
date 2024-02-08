import React,{useState} from 'react';
import Select from 'react-select';

const DropDownTag = ({selectedOptions,setSelectedOptions}) => {

   
  const [createValue,setCreateValue]=useState('')

  const handleChange = (selectedOptions) => {
    console.log("hii")
    setSelectedOptions(selectedOptions);
  };

  const customOptions = [
    { value: 'bueaty', label: 'Bueaty' },
    { value: 'soap', label: 'Soap' },
    // Add more options as needed
  ];

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
