import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GiftExpert = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {

    if(categories.includes(value)) return;

    setCategories([value, ...categories])

  }

  return (
    <>
      <h1>Empezando Gif</h1>
      
      
      <AddCategory onNewValue={ (event) => onAddCategory(event) }/>

      {
        categories && categories.map(category => (
          <GifGrid key={ category } category={ category } />
        ))
      }
      
    </>
  )


}