import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext(null);  //maybe you need to specify to type of information

const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null); //adjustment here 
  const [jwt, setJWT]   = useState(null);

  useEffect(() => {
    const storedJWT = localStorage.getItem("jwt");
    if (storedJWT) {
      setJWT(storedJWT);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedJWT}`;

      axios.get("/user-info")
      .then(response => {
        setCurrentUser(response.data)
      })
      .catch(error => {
        console.log("Error fetching user info", error);
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          localStorage.removeItem('jwt');
          setJWT(null);
        }
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, jwt, setCurrentUser, setJWT }} >
      {children}
    </UserContext.Provider>
  )
}
// , setCurrentUser, setJWT
export { UserContext, UserProvider}


// eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE3MTk3ODE2NzB9.IXWhVaCujy_eg5vNqdQkBEDnhG9kDKVka367SV8F2F8
