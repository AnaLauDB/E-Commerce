import './Footer.css'
import { useCart } from '../hooks/useCart'

export function Footer() {
    const { cartItems } = useCart()

    return (
        <footer className='footer'>
            <p>© 2024 E-Commerce. All rights reserved.</p>
            <p> Shopping Cart con useContext y useReducer</p>
            {
                // JSON.stringify(cartItems, null, 2)
            }
        </footer>
    )
}