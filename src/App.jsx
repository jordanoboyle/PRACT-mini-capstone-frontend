import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UserContext } from "./UserContext";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <UserContext.Provider value={{name: "John"}}>
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;