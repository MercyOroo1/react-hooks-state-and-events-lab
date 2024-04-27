import React, { useState } from "react";

function Item({ name, category }) {
  const [isCart , setIsCart] = useState(false)

  function handleCart () {
    setIsCart (!isCart)
  }
  const liClass = isCart ? 'in-cart' : ''
  const btnClass = isCart ? 'remove' : 'add'
  return (
    <li className= {liClass}>
      
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick = {handleCart}>{isCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
