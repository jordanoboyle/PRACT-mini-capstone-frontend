import axios from "axios";
import { useState, useEffect } from "react";


export function CartedProductIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  //make sure that carted products index renders in httpie
  // on button
  //get a function showing a console log when the page is clicked. 
  //axios get to render the users cart.
  // rendering...product name(from product), product price(from product), product image?, quantity


  const getCartedProducts = () => {
    console.log("getting users' products");
    axios.get("http://localhost:3000/carted_products.json").then(response => {
      console.log(response.data);
      setCartedProducts(response.data);
    })
  }
  const updateQuantityCartedProducts = () => {
    console.log("changing quantity")
  }
    useEffect(getCartedProducts, [])
  
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      {cartedProducts.map(cp => (
        <div key={cp.id}>
          <p>{cp.id} </p>
          <p>{cp.product.name}</p>
          <p>{cp.product.description}</p>
          <p>{cp.product.price}</p>
          <div>
            <form onSubmit={updateQuantityCartedProducts}>
              <p>Quantity: <input type="text" name="quantity" defaultValue={cp.quantity}/> <button type="submit">Update Quantity</button> </p>
            </form >
          </div>
          <hr/>
        </div>
      ))}
    </div>
  );
}