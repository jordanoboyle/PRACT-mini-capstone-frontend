import axios from "axios"

export function ProductShow(props) {

  const deleteProduct = () => {
    console.log("deleting the recipe");
    axios.delete(`http://localhost:3000/products/${props.product.id}.json`).then(response => {
      console.log(response.data)
    })
  }
  
  return (
    <div>
      <h1><b>Further Product Info:</b></h1>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price:{props.product.price} </p>
      <p>Number Remaining: {props.product.inventory} </p>
      <p>Supplier(must be 1-4): {props.product.supplier.name}</p>
      <form>
        <div>UPDATE PRODUCT INFORMATION BELOW</div>
        <div>
          Name: <input type="text" name="name" defaultValue={props.product.name} />
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
          Supplier: <input type="text" name="supplier_id" defaultValue={props.product.supplier_id} />
        </div>
      </form>
      <br />
      <br />
      <br />
      <button onClick={deleteProduct}>Remove Product</button>
    </div>
  )
}