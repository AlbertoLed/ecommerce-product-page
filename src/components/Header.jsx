import React from 'react'
import iconMenu from '../../public/icon-menu.svg'
import logo from '../../public/logo.svg'
import userAvatar from '../../public/image-avatar.png'
import closeIcon from '../../public/icon-close.svg'
import './Header.css'

function Header(props) {
    const {cartItems, toggleCart} = props
    const [isMobileNav, setIsMobileNav] = React.useState(false)

    function toggleMobileNav() {
        setIsMobileNav(prev => !prev)
    }

    return (
        <header className='header'>
            <div>
                <img 
                    className='header__mobile-menu' 
                    src={iconMenu} 
                    alt='icon menu'
                    onClick={toggleMobileNav} />
                    
                <img 
                    className='header__logo' 
                    src={logo} 
                    alt='logo' />
            </div>
            <nav className={`nav ${!isMobileNav && `nav--closed`}`}>
                <img 
                className='nav__close-icon' 
                src={closeIcon} 
                alt="close icon"
                onClick={toggleMobileNav} />
                <ol className='nav__list'>
                    <li className='nav__option'>Collections</li>
                    <li className='nav__option'>Men</li>
                    <li className='nav__option'>Women</li>
                    <li className='nav__option'>About</li>
                    <li className='nav__option'>Contact</li>
                </ol>
            </nav>
            <div className={`nav-dark-bg ${!isMobileNav && `nav-dark-bg--closed`}`}></div>

            
            <div className='header__right-items'>
                <div 
                className='header__cart'
                onClick={toggleCart}>
                    <svg className='cart__icon'  width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentcolor"/></svg>
                    {cartItems > 0 && <span className='cart__quantity'>{cartItems}</span>}
                </div>
                <img 
                    className='header__user-avatar'
                    src={userAvatar} 
                    alt='user avatar' />
            </div>
        </header>
    )
}

export default Header