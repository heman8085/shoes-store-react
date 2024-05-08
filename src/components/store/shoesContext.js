import React,{ createContext } from "react";
const shoesContext = createContext();

const shoesProvider = ({ children }) => {
    
    return (
        <shoesContext.Provider values={{}}>
         {children}
        </shoesContext.Provider>
    )
}

export {shoesContext, shoesProvider}