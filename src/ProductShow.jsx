import axios from "axios"
import { useState } from "react";


export function ProductShow(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset())  
    console.log("sending update", event)
  }

  const handleDeleteProduct = () => {
    console.log("deleting the recipe");
    props.onDestroyProduct(props.product.id);
  }

  const cartProduct = (event) => {
    event.preventDefault()
    console.log("carting the product");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/carted_products.json", params).then((response) => {
      console.log(response.data);
    })
    window.location.href = "/"
  }
  const ShowUpdateForm = () => {
    var showMe = false
    let changingRender;
    if (showMe) {
      changingRender =
      <form onSubmit={handleSubmit} className="updateProductCard">
        <div>UPDATE PRODUCT INFORMATION BELOW</div>
          <br />
          <p id="updateForm1">Product Name: <input type="text" name="name" defaultValue={props.product.name} /></p>
          <p id="updateForm1">Description: <input type="text" name="description" defaultValue={props.product.description} /></p>
          <p id="updateForm1">Price: <input type="text" name="price" defaultValue={props.product.price} /></p>
          <p id="updateForm1">Inventory: <input type="text" name="inventory" defaultValue={props.product.inventory} /></p>
          <p id="updateForm1">Supplier(must be 1-3): <input type="text" name="supplier_id" defaultValue={props.product.supplier_id} /></p>
        <button type="submit">Update Production Information</button>
      </form>
    } else {
      changingRender = <h1>This is working if we change showMe to false</h1>;
    }
    return (
      <div>
        {changingRender}
      </div>
    )
  }


  return (
    <div>
      <h1>Hello from the modal</h1>
      <div className="showProductInfo">
        <h1><b>Further Product Info:</b></h1>
        <p>{props.product.id}</p>
        <img className="showProductCardImage" width="300px" height="300px" src={props.product.images[1].url} />
        <p>Name: {props.product.name}</p>
        <p>Description: {props.product.description}</p>
        <p>Price:{props.product.price} </p>
        <p>Number Remaining: {props.product.inventory} </p>
        <p>Supplier: {props.product.supplier.name}</p>
      </div>
      <h2>Tags</h2>
        {props.product.categories.map(category => (
          <div key={category.id}> 
            <p>{category.name}</p>
          </div>
        ))}
      <hr/>
      <form onSubmit={cartProduct}>
        <div>
          <p>Quantity Desired: <input type="text" name="quantity" /></p>
          <p> <input type="hidden" name="product_id" defaultValue={props.product.id} /> </p>
        </div>
        <button type="submit">Submit product to cart</button>
      </form>
      <hr/>
      < ShowUpdateForm/>
      <br />
      <br />
      <br />
      <button onClick={handleDeleteProduct}>Remove Product</button>
    </div>
  )
}