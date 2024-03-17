import React from 'react'
import Button from '../Button'

function Input(props){
    const {placeholder, name,handleInput,value} = props;
    return(
        <input type='text' placeholder={`Filter by ${placeholder}`} name={name} value={value} className='border border-gray-400 p-1 rounded' onChange={handleInput}/>
    )
}

function FilterBy(props) {

    const {filterInput, setFilterInput, handleSearch} = props;
const handleInput = (e) =>{
   const name = e.target.name;
   const value = e.target.value;
   setFilterInput({...filterInput, [name]: value})
}
  return (
    <div className='flex flex-col gap-2 md:flex-row'>
    <Input name="name" placeholder="name" value={filterInput.name} handleInput={handleInput}/>
    <Input name="location" placeholder="location" value={filterInput.location} handleInput={handleInput} />
    <Button name="Search" onClick={handleSearch}/>
    </div>
  )
}

export default FilterBy