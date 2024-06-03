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
            <img src={product.images[0] ? product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="Image doest not exist"/> 
            <p>Description: {product.description}</p>
            <button onClick={() => props.onShowProduct(product)}> Further Information</button>
          </div>
      ))}
      </div>

    </div>
  );
}
