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

    const currentPrice = price - (price * (discount / 100))

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
            <div className='info'>
                <p className='info__company'>{company}</p>
                <h1 className='info__name'>{name}</h1>
                <p className='info__description'>{description}</p>
                <div className='info__price-container'>
                    <div className='info__discount-container'>
                        <span className='info__current-price'>{
                            new Intl.NumberFormat('en-US', 
                                {style: 'currency', currency: 'USD'}
                            ).format(currentPrice)
                        }</span>
                        <span className='info__discount'>{discount}%</span>
                    </div>
                    <span className='info__price'>{
                        new Intl.NumberFormat('en-US', 
                            {style: 'currency', currency: 'USD'}
                        ).format(price)
                    }</span>
                </div>
                <div className='info__add-item'>
                    <div className='add-item__quantity-container'>
                        <button className='add-item__icon-button'>
                            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg"><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" fill="currentcolor" fill-rule="nonzero" /></svg>
                        </button>
                        <span className='add-item__quantity'>0</span>
                        <button className='add-item__icon-button'>
                            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" fill="currentcolor" fill-rule="nonzero"/></svg>
                        </button>
                    </div>
                    <button className='add-itme__add-button'>
                        <svg className='add-button__icon' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentcolor" fill-rule="nonzero"/></svg>
                        <p className='add-button__text'>Add to cart</p>
                    </button>
                </div>      
            </div>
        </main>
    )
}

export default ProductPage