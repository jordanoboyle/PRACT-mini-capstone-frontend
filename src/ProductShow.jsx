import axios from "axios"

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

  const cartProduct = () => {
    console.log("carting the product")
  }
  
  return (
    <div>
      <h1><b>Further Product Info:</b></h1>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price:{props.product.price} </p>
      <p>Number Remaining: {props.product.inventory} </p>
      <p>Supplier: {props.product.supplier.name}</p>
      <hr/>
      <button onClick={cartProduct}>Submit product to cart</button>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div>UPDATE PRODUCT INFORMATION BELOW</div>
        <br />
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={props.product.name} />
        </div>
        <div>
          Description: <input type="text" name="description" defaultValue={props.product.description} />
        </div>
        <div>
          Price: <input type="text" name="price" defaultValue={props.product.price} />
        </div>
        <div>
          Inventory: <input type="text" name="inventory" defaultValue={props.product.inventory} />
        </div>
        <div>
          Supplier(must be 1-3): <input type="text" name="supplier_id" defaultValue={props.product.supplier_id} />
        </div>
        <button type="submit">Update Production Information</button>
      </form>
      <br />
      <br />
      <br />
      <button onClick={handleDeleteProduct}>Remove Product</button>
    </div>
  )
}