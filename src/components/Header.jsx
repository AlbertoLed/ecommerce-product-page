import React from 'react'
import iconMenu from '../../public/icon-menu.svg'
import logo from '../../public/logo.svg'
import iconCart from '../../public/icon-cart.svg'
import userAvatar from '../../public/image-avatar.png'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div>
                <img 
                    className='header__mobile-menu' 
                    src={iconMenu} 
                    alt='icon menu' />
                <img 
                    className='header__logo' 
                    src={logo} 
                    alt='logo' />
            </div>
            <nav className='desktop-nav'>
                <ol>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </nav>
            
            <div className='header__right-items'>
                <img 
                    className='header__cart'
                    src={iconCart} 
                    alt='icon cart' />
                <img 
                    className='header__user-avatar'
                    src={userAvatar} 
                    alt='user avatar' />
            </div>
        </header>
    )
}

export default Header