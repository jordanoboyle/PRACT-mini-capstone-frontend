import axios from "axios"

export function ProductsIndex(props) {
  
  return (
    <div>
      <h1> Our Curated Collection </h1>
      <div className="row">
        {props.products.map(product => (
        <div className="col-sm-3 mb-3 mb-sm-0" key={product.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <img height="300px" width="300px" src={product.images[0] ? product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="Image doest not exist" />
              <p className="card-text">{product.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>  
  );
}
