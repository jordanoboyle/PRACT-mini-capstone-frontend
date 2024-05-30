export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>Add a New </h1>
      <form>
        <div>
          Product Name: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Product Price: <input type="text" />  {/*ask Brian about this*/}
        </div>
        <div>
          Image: <input type="url" />
        </div>
        <button type="submit">ADD NEW PRODUCT</button>
      </form>
    </div>
  );
}
