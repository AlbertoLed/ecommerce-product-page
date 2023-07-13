import { useState } from 'react'
import './ProductPage.css'

function ProductPage(props) {
    const {name, company, description, price, discount, images} = props
    const [currentImage, setCurrentImage] = useState(0)

    function previousImage() {
        setCurrentImage(prevImage => prevImage === 0 ? images.length - 1 : prevImage - 1)
    }
    function nextImage() {
        setCurrentImage(prevImage => prevImage === images.length - 1 ? 0 : prevImage + 1)
    }

    return(
        <main>
            <div className='img-container'>
                <img 
                className='img-container__image' 
                src={images[currentImage].image} 
                alt="product image" />
                <button 
                    className='
                    img-container__button 
                    img-container__button--left'
                    onClick={previousImage}>
                        <svg className='button__icon' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentcolor" stroke-width="4" fill="none" fill-rule="evenodd"/></svg>
                </button>
                <button
                    className='
                    img-container__button
                    img-container__button--right'
                    onClick={nextImage}>
                        <svg className='button__icon' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentcolor" stroke-width="4" fill="none" fill-rule="evenodd"/></svg>
                </button>
            </div>
            
        </main>
    )
}

export default ProductPage