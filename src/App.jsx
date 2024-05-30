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

function ProductsIndex() {
  return (
    <div id="products-index">
      <h1> Our Curated Collection </h1>
      <div className= 'Products'>
        <p>Product Name: Halo Infinite Shirt</p>
        <img src="https://m.media-amazon.com/images/I/81r6IF9GNNL._AC_UF1000,1000_QL80_.jpg" />
        <p>
          Description: Here is some glorious information about Halo 6, otherwise Halo Infinite.
          Good game with some much needed patching. This is a late review but, still truthful to this day. 
          Now go get them Covenant.
        </p>
        
      </div>

    </div>
  )
}

function Footer() {
  return (
  <footer>
    <p>Copyright Year of the APE</p>
    <p>Site by Jordan O'Boyle</p>
  </footer>
  )
}

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