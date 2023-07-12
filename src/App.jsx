// import { useState } from 'react'
// import React from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import { productData } from '../productData'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <ProductPage
        key={productData.price}
        name={productData.productName}
        company={productData.companyName}
        description={productData.description}
        price={productData.price}
        discount={productData.discount}
        images={productData.images}
      />
    </>
  )
}

export default App
