import axios from "axios"

export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1> Our Curated Collection </h1>
      <div className="cardProducts">
        {props.products.map((product) =>(
          <div key={product.id} className='products card'>
            <p>ID: {product.id}</p>
            <p>Product Name: {product.name}</p>
            <img src={product.image} />
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button> Further Information</button>
          </div>
      ))}
      </div>

    </div>
  );
}
