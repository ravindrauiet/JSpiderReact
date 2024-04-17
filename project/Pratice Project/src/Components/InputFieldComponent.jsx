import React, { useState } from 'react'

function InputFieldComponent({type,placeholder,value,onChange,onBlur,isValid}) {
    const [isTouched, setIsTouched] = useState(false);

    const handleBlur = () => {
        setIsTouched(true);
        if (onBlur) onBlur();
      };
    
      const handleChange = (event) => {
        if (!isTouched) {
          setIsTouched(true);
        }
        if (onChange) onChange(event.target.value);
      };
  return (
    <>
    <label>{placeholder}</label>
    <input 
        type={type}
        name={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none ${isValid === false ? 'border-red-500' : ''}`}
    />
    {isValid === false && isTouched && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid value.</p>
    )}
    </>
  )
}

export default InputFieldComponent
