import React,{ createContext,useEffect,useState } from "react";
const ShoesContext = createContext();

const ShoesProvider = ({ children }) => {
    const [shoesList, setShoesList] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const response = await fetch(
                  "https://shoes-shop-bd85f-default-rtdb.firebaseio.com/shoesDetails.json"
                );
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    const formData = data ? Object.values(data) : [];
                    setShoesList(formData);
                } else {
                    throw new Error('failed to fetch form data');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchFormData();
    }, [setShoesList]);
    
    const addToCartHandler = (item) => {
        setCart([...cart, item])
    }
    const size = cart.length;
    
    return (
        <ShoesContext.Provider value={{shoesList,setShoesList,addToCartHandler,cart,size}}>
            {children}
        </ShoesContext.Provider>
    );
};

export {ShoesContext, ShoesProvider}