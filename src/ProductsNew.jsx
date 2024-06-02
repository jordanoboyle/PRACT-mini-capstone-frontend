export function ProductsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData (event.target);
    props.onCreateProduct(params, () => event.target.reset())

  }
  return (
    <div id="products-new">
      <h1>Add a New Product</h1>      
      <form onSubmit={handleSubmit}>
        <div>
          Product Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Product Price: <input name="price" type="integer" />  {/*ask Brian about this*/}
        </div>
        <div>
          Supplier ID (must be 1-4): <input name="supplier_id" type="text" />
        </div>
        <button type="submit">ADD NEW PRODUCT</button>
      </form>
    </div>
  );
}
