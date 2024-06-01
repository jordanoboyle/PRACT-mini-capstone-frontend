import axios from "axios"

export function ProductsIndex() {
  return (
    <div id="products-index">
      <h1> Our Curated Collection </h1>
      <div className='Products'>
        <p>Product Name: Halo Infinite Shirt</p>
        <img src="https://m.media-amazon.com/images/I/81r6IF9GNNL._AC_UF1000,1000_QL80_.jpg" />
        <p>
          Description: Here is some glorious information about Halo 6, otherwise Halo Infinite.
          Good game with some much needed patching. This is a late review but, still truthful to this day.
          Now go get them Covenant.
        </p>
        <p>Price: $30.00</p>

      </div>

    </div>
  );
}
