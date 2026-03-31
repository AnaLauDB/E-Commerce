import { useContext } from "react";
import { CartContext } from "../components/cart.jsx";

export const useCart = () => {
    const { cartItems, addToCart, clearCart } = useContext(CartContext)

    return { cart: cartItems, addToCart, clearCart }
}