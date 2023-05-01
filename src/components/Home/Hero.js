import React from 'react';

import heroImg from '../../assets/pictures/hero-intro.png'

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__intro">
                    <h1 className="hero__title">EDEM</h1>
                    <h2 className="hero__slogan">Лучшие двери для Вас!</h2>

                    <a className="btn--action hero__btn">В каталог</a>
                </div>
                <img src={heroImg} alt="" className="hero__img" />
            </div>
        </section>
    )
}


export default Hero;