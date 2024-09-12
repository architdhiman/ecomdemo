import {createContext,useContext,useEffect, useState } from "react";
import axios from "axios";
const authContext = createContext()

const AuthProvider = ({children}) =>{
    const[auth,setAuth] = useState({
        token:""
    })    
    
      useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
          const parsedData = JSON.parse(data);
          setAuth((prevAuth) => ({
            ...prevAuth,
            token: parsedData.token,
          }));
          axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
        } else {
          delete axios.defaults.headers.common["Authorization"];
        }
        },[]);

    return(
        <authContext.Provider value={[auth,setAuth]}>
            {children}
        </authContext.Provider>
    )
}
const useAuth = () => useContext(authContext)
export { useAuth,AuthProvider}
