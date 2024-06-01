import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductShow } from "./ProductShow";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";

export function Content() {

  const [products, setProducts] = useState([]);
  const [isProductShowVisible, setIsProductShowVisible] = useState(false);  
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handling the photos!");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }
  useEffect(handleIndexProducts, []);

  const handleShowProduct = (myProduct) => {
    console.log("handling the product", myProduct);
    setIsProductShowVisible(true);
    setCurrentProduct(myProduct)
  }
  const handleClose = () => {
    console.log("closing the modal");
    setIsProductShowVisible(false);
  }

  return (
    <main>
      <ProductsNew />
      <button id="BRB" onClick={handleIndexProducts}>BIG RED BUTTON </button>
      <ProductsIndex  products={products} onShowProduct={handleShowProduct}/>
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <h1>THE MODAL</h1>
        <ProductShow product={currentProduct}/>
      </Modal>
    </main>
  );
}
