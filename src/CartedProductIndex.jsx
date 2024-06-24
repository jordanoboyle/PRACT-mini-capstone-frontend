import axios from "axios";
import { useState, useEffect } from "react";


export function CartedProductIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  //make sure that carted products index renders in httpie
  // on button
  //get a function showing a console log when the page is clicked. 
  //axios get to render the users cart.
  // rendering...product name(from product), product price(from product), product image?, quantity


  const getCartedProducts = (event) => {
    event.preventDefault();  
    console.log("getting users' products");
    axios.get("http://localhost:3000/carted_products.json").then(response => {
      console.log(response.data);
      setCartedProducts(response.data);
    })
  }
    // useEffect(getCartedProducts, [])
  
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={getCartedProducts}>This is from Carted products.</button>
      {cartedProducts.map(cp => (
        <div>
          <p>ID: {cp.id}</p>
        </div>
      ))}
    </div>
  );
}