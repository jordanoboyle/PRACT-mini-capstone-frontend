

export function ProductShow(props) {
  return (
    <div>
      <h1><b>Further Product Info:</b></h1>
      <p>Supplier: {props.product.supplier.name}</p>
      <p>Number Remaining: {props.product.inventory} </p>
      <p>Price:{props.product.price} </p>
    </div>
  )
}