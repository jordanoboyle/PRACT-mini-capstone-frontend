import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {

  const products = [
    {id: 1, name: "Here is Rubber Duck", url: "nothing", description: "duck made of rubber", price: 30 },
    {id: 2, name: "Panda dog toy", url: "nothing", description: "panda made of fluff", price: 45 },
  ]

  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}
