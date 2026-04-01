import { Products } from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { CartItem } from "./components/Cart.jsx"
import { CartProvider } from "./context/cart.jsx"


function App() {

  const [products] = useState(initialProducts)
  const { filterProducts, filters } = useFilters()

  const filteredProducts = filterProducts(products)


  return (
    <>
      <h1>Shopping Cart</h1>
      <CartProvider>
        <Header />
        <CartItem />
        <Products products={filteredProducts} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
