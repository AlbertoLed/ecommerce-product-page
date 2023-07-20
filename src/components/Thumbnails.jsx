import './Thumbnails.css'

function Thumbnail(props) {
const {images, currentImage, selectImage} = props

    return(
        <ul className='thumbnails'>
            {images.map(image => 
            <li 
            key={image.thumbnail}
            className={`
                thumbnails__item
                ${images[currentImage].thumbnail === image.thumbnail &&
                `thumbnails__item--selected`}`}
            onClick={() => selectImage(image.thumbnail)}>
                <div className='thumbnail__image-bg'>
                    <img 
                    src={image.thumbnail} 
                    className={`thumbnail__image
                        ${images[currentImage].thumbnail === image.thumbnail &&
                        `thumbnail__image--selected`}`}
                    />
                </div>
            </li>)}
        </ul>
    )
}

export default Thumbnail