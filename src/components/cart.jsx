import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = product => {
        const productInCart = cartItems.find(item => item.id === product.id)

        if (productInCart >= 0) {
            const newCart = structuredClone(cartItems)
            newCart[newCart.findIndex(item => item.id === product.id)].quantity++
            setCartItems(newCart)
        } else {
            setCartItems(prevCart => [...prevCart, { ...product, quantity: 1 }])
        }
    }

    const removeFromCart = productId => {
        setCartItems(prevCart => prevCart.filter(item => item.id !== productId))
    }

    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}