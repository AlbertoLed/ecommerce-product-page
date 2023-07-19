import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import { productData } from '../productData'

import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(Number(localStorage.getItem('cartItems')) || 0)
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  function addItems(quantity) {
    setCartItems(prevCartItems => prevCartItems + quantity)
  }
  function toggleCart() {
    setOpenCart(prevOpenCart => !prevOpenCart)
  }
  function deleteItem() {
    setCartItems(0)
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
        deleteItem={deleteItem}
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
