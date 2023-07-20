import Thumbnail from './Thumbnails'
import './Lightbox.css'

function Lightbox(props) {
    const {images, currentImage, selectImage, previousImage, nextImage, closeLightbox} = props
    return(
        <div className='lightbox'>
            <div className='lightbox__close-icon'>
                <svg 
                className='lightbox__close-svg' 
                onClick={closeLightbox}
                width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentcolor"/></svg>
            </div>
            <div className='lightbox__image-container'>
                <img 
                className='lightbox__image' 
                src={images[currentImage].image} 
                alt="product image" />
                <button 
                    className='lightbox__button lightbox__button--left'
                    onClick={previousImage}>
                        <svg className='lightbox__button-svg' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentcolor" strokeWidth="4" fill="none"/></svg>
                </button>
                <button
                    className='lightbox__button lightbox__button--right'
                    onClick={nextImage}>
                        <svg className='lightbox__button-svg' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentcolor" strokeWidth="4" fill="none"/></svg>
                </button>
            </div>
            <Thumbnail 
                images={images}
                currentImage={currentImage}
                selectImage={selectImage}
            />
        </div>
    )
}

export default Lightbox