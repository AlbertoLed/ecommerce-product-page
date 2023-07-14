import { useState} from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import { productData } from '../productData'

import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(0)

  function addItems(quantity) {
    setCartItems(prevCartItems => prevCartItems + quantity)
  }

  return (
    <>
      <Header 
        key={cartItems}
        cartItems={cartItems}
      />
      <ProductPage
        key={productData.price}
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
