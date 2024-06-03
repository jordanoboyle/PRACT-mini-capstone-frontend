

export function ProductShow(props) {

  const deleteProduct = () => {
    console.log("deleting the recipe")
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
        <div>SPACE FOR UPDATE</div>
      </form>
      <br />
      <br />
      <br />
      <button onClick={deleteProduct}>Remove Product</button>
    </div>
  )
}