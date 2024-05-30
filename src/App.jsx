function Header() {
  return (
  <header>
    <a href="#">Return to Main Menu</a> | <a href="#products-index">Check Out Products</a> | <a href="#products-new">Post New Stuff</a>
  </header>
  )
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>Add a New </h1>
      <form>
        <div>
          Product Name: <input type="text"/>
        </div>
        <div>
          Description: <input type="text"/>
        </div>
        <div>
          Product Price: <input type="text"/>  {/*ask Brian about this*/}
        </div>
        <div>
          Image: <input type="url"/>
        </div>
        <button type="submit">ADD NEW PRODUCT</button>
      </form>
    </div>
  )
}

function ProductsIndex() {}

function Footer() {}

function Content() {
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;