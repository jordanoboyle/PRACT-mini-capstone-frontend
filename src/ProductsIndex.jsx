import axios from "axios"
import { Modal } from "./Modal";
import { useState } from "react";

export function ProductsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <h1> Our Curated Collection </h1>
      <p>Search: <input  
      type="text" 
      placeholder="Search by title..." 
      value={searchTerm} onChange={event => setSearchTerm(event.target.value)} 
      list="product names"/></p>
      <datalist id="product names">
        <option>hoody</option>
      </datalist>
      <div className="row">
        {props.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
        <div className="col-sm-3 mb-3 mb-sm-0" key={product.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <img height="300px" width="300px" src={product.images[0] ? product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="Image doest not exist" />
              <p className="card-text">{product.description}</p>
              <button onClick={() => props.onShowProduct(product)} className="btn btn-primary"> More Info</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>  
  );
}
