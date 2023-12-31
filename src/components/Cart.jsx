import './Cart.css'

function Cart(props) {
    const {thumbnail, name, price, discount, cartItems, deleteItem} = props

    const currentPrice = price - (price * discount * .01)
    
    
    const finalPrice = currentPrice * cartItems

    const currentPriceFormatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(currentPrice)
    const finalPriceFormatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(finalPrice)

    return(
        <div className="cart">
            <p className="cart__title">Cart</p>
            <div className="cart__items-container">
                {
                    cartItems > 0 ?
                    <>
                    <div className="cart__product">
                        <img className="cart__product-image" src={thumbnail} alt="" />
                        <p className="cart__product-name">{name}</p>
                        <p className='cart__product-price-container'>
                            <span className="cart__product-price">{currentPriceFormatted}</span>
                            <span className="cart__product-quantity">x {cartItems}</span>
                            <span className="cart__product-final-price">{finalPriceFormatted}</span>
                        </p>
                        <div 
                        className="cart__product-delete-button"
                        onClick={deleteItem}>
                            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" ><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" fill="currentcolor" fillRule="nonzero"/></svg>
                        </div>
                    </div>
                    <button className="cart__checkout-button">Checkout</button>
                    </>
                    :
                    <p className='cart__empty-message'>Your cart is empty.</p>
                }
                
            </div>
        </div>
    )
}

export default Cart