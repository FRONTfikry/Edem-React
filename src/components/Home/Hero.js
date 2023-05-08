import React from 'react';

import { Link } from 'react-router-dom';

import heroImg from '../../assets/pictures/hero-intro.png'

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__intro">
                    <h1 className="hero__title">EDEM</h1>
                    <h2 className="hero__slogan">Лучшие двери для Вас!</h2>

                    <Link to="/cart" className="btn--action hero__btn">В каталог</Link>
                </div>
                <img src={heroImg} alt="" className="hero__img" />
            </div>
        </section>
    )
}


export default Hero;