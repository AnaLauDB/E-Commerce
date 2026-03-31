import { useId } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

export function CartItem({ }) {
    const cartCheckboxId = useId()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className='cart'>
                <h2>Carrito de compras</h2>
                <ul>
                    <li>
                        <img
                            src='https://cdn.dummyjson.com/product-images/2/thumbnail.jpg'
                            alt='iPhone'
                        />
                        <div>
                            <strong>iPhone 9</strong> - $549
                        </div>
                        <footer>
                            <small>Cantidad: 1</small>
                            <button> + </button>
                        </footer>
                    </li>
                </ul>
                <button className='clear-cart'>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
