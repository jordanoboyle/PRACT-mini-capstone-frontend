import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductShow } from "./ProductShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { Route, Routes } from "react-router-dom";

export function Content() {

  const [products, setProducts] = useState([]);
  const [isProductShowVisible, setIsProductShowVisible] = useState(false);  
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handling the products!");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }
  
  const handleShowProduct = (myProduct) => {
    console.log("handling the product", myProduct);
    setIsProductShowVisible(true);
    setCurrentProduct(myProduct)
  }
  const handleClose = () => {
    console.log("closing the modal");
    setIsProductShowVisible(false);
  }
  
  const handleCreateProduct = (theParams, successCallback) => {
    console.log("handling create", theParams);
    axios.post("http://localhost:3000/products.json", theParams). then((response) => {
      console.log(response.data)
      setProducts([...products, response.data]);
      successCallback();

    })
    
  }

  const handleUpdateProduct = (id, theParams, successCallback) => {
    console.log("handling an update")
    axios.patch(`http://localhost:3000/products/${id}.json`, theParams).then((response) => {
      console.log(response.data);

      setProducts(products.map(product => {
        if (product.id === id) {
          return response.data
        } else {
          return product
        }
      }))
      successCallback()
      handleClose()
    })
  }

  const handleDestroyProduct = (id) => {
    console.log("handle destroying product")
    axios.delete(`http://localhost:3000/products/${id}.json`).then(response => {
      console.log(response.data)

      setProducts(products.filter((product) => product.id !== id))

    handleClose()
    })

  }
  useEffect(handleIndexProducts, []);

  return (
    <main>
      <div>
        <a href="/login">Login</a> | <a href="/signup">Not member? Sign-Up Here</a>
        <br/>
        <a>User Cart</a>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createNew_product" element={<ProductsNew onCreateProduct={handleCreateProduct}/>} />
        <Route path="/" element={<ProductsIndex  products={products} onShowProduct={handleShowProduct}/>} />
      </Routes>
      <LogoutLink />
      <button id="BRB">BIG RED BUTTON </button>
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <h1>THE MODAL</h1>
        <ProductShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct}/>
      </Modal>
    </main>
  );
}
