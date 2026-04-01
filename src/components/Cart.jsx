import { useId } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartProduct({ thumbnail, title, price, quantity, addToCart, removeFromCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - {price}
            </div>
            <footer>
                <small>Cantidad: {quantity}</small>
                <button onClick={removeFromCart}> - </button>
                <button onClick={addToCart}> + </button>
            </footer>
        </li>
    )
}


export function CartItem({ }) {
    const cartCheckboxId = useId()
    const { cartItems, clearCart, addToCart, removeFromCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className='cart'>
                <h2>Carrito de compras</h2>
                <ul>
                    {cartItems.map(item => (
                        <CartProduct
                            key={item.id}
                            addToCart={() => addToCart(item)}
                            removeFromCart={() => removeFromCart(item)}
                            {...item} />
                    ))}
                </ul>
                <button className='clear-cart' onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
