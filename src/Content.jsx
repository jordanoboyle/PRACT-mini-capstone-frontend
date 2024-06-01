import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { useState, useEffect } from "react";
import axios from "axios";

export function Content() {

  // const products = [
  //   {id: 1, name: "Here is Rubber Duck", description: "a duck made of rubber", image: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941", price: 30 },
  //   {id: 2, name: "Panda dog toy", description: "panda made of fluff", image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3535959-center-1", price: 45 },
  //   {id: 3, name: "Panda dog toy", description: "panda made of fluff", image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3535959-center-1", price: 45 },
  //   {id: 4, name: "Panda dog toy", description: "panda made of fluff", image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3535959-center-1", price: 45 },

  // ]
  const [products, setProducts] = useState([]);
  
  const handleIndexProducts = () => {
    console.log("handling the photos!");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }
  useEffect(handleIndexProducts, [])

  return (
    <main>
      <ProductsNew />
      <button id="BRB" onClick={handleIndexProducts}>BIG RED BUTTON </button>
      <ProductsIndex  products={products}/>
    </main>
  );
}
