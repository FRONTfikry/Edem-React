import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import cart from '../../assets/icons/cart.svg';

function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <nav className="header__nav">
                    <a href="/#" className="nav__logo">
                        <img src={logo} alt="" className="header__img" />
                    </a>
                    <h1 className="nav__title">ПРОФИЛЬ</h1>
                </nav>
                <div className="header__links">
                    <Link to="/cart" className="header__link">
                        <img src={cart} alt="" className="header__img" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;