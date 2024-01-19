import React, { useContext, useState } from 'react'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token",serverToken);
    }

    const isLoggedIn = !!token;
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }
  return (
    <AuthContext.Provider value={{storetokenInLS,LogoutUser,isLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}