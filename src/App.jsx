import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./UserContext";


function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;