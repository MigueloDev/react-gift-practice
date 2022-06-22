import { useState } from "react"


export const AddCategory = ({ onNewValue }) => {
  
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    const {value} = event.target
    setInputValue(value)
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    if(inputValue.length <= 1) return;
    onNewValue( inputValue.trim() )
    setInputValue('')
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      value={inputValue} 
      onChange={handleInputChange}
      className="input-search" 
      placeholder="Buscar Gif"/>
    </form>
  )
}