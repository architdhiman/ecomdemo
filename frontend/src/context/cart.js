import { createContext,useContext, useEffect, useState } from "react";
const CartContext = createContext()

const CartProvider = ({children}) =>{
    const[cart,setCart] = useState([])

    useEffect(()=>{
        const existingCard = localStorage.getItem('cart')
        setCart(JSON.parse(existingCard) || [])
    },[])

    useEffect(()=>{        
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    return(
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    )
}
const useCart =()=> useContext(CartContext)
export {useCart,CartProvider}