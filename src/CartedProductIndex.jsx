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

  const purchaseCartedProducts = () => {
    console.log("buying the carted products")
  }
  
//here we are updating the product amount
  const updateQuantityCartedProducts = (event) => {
    event.preventDefault();
    console.log("changing quantity");
    const form   = event.target
    const params = new FormData(form)
    const cpID   = params.get("id")
    axios.patch(`http://localhost:3000/carted_products/${cpID}.json`, params).then((response) =>{
      console.log(response.data);
      window.location.href = "/cart"
    })
    .catch((error) => {
      console.error("There was an error updating quantity", error)
    })
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
          <img height="300px" width="300px" src={cp.images[0].url} ></img>
          <p>{cp.product.name}</p>
          <p>{cp.product.description}</p>
          <p>{cp.product.price}</p>
          <div>
            <form onSubmit={updateQuantityCartedProducts}>
              <p>Is this hidden?<input name="id" value={cp.id} type="hidden" /></p>
              <p>Quantity: <input type="text" name="quantity" defaultValue={cp.quantity}/> <button type="submit">Update Quantity</button> </p>
            </form >
            <br/>
            <button onClick={purchaseCartedProducts}>Purchase Cart</button>
          </div>
          <hr/>
        </div>
      ))}
    </div>
  );
}