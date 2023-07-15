import { useState} from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import { productData } from '../productData'

import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(0)
  const [openCart, setOpenCart] = useState(false)

  function addItems(quantity) {
    setCartItems(prevCartItems => prevCartItems + quantity)
  }
  function toggleCart() {
    setOpenCart(prevOpenCart => !prevOpenCart)
  }

  return (
    <>
      <Header 
        cartItems={cartItems}
        toggleCart={toggleCart}
      />
      {openCart && 
      <Cart
        thumbnail={productData.images[0].thumbnail}
        name={productData.productName}
        price={productData.price}
        discount={productData.discount}
        cartItems={cartItems}
      />}
      <ProductPage
        name={productData.productName}
        company={productData.companyName}
        description={productData.description}
        price={productData.price}
        discount={productData.discount}
        images={productData.images}
        addItems={addItems}
      />
    </>
  )
}

export default App
