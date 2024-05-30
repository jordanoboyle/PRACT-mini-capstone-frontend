import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}
