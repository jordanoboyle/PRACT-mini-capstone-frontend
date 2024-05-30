function Header() {
  return (
  <header>
    <a href="#">Return to Main Menu</a> | <a href="#products-index">Check Out Products</a> | <a href="#posts-new">Post New Stuff</a>
  </header>
  )
}

function ProductsNew() {}

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