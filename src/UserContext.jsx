import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [jwt, setJWT]   = useState(null);

  useEffect(() => {
    const storedJWT = localStorage.getItem("jwt");
    if (storedJWT) {
      setJWT(storedJWT);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedJWT}`;

      axios.get("/user-info")
      .then(response => {
        setUser(response.data)
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
    <UserContext.Provider value={{ user, jwt, setUser, setJWT}} >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider}



