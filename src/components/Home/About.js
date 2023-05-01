import React from 'react';

import checkImg from '../../assets/icons/check.svg'

function AboutItem({text}) {
    return (
        <li className="about__item">
            <img src={checkImg} alt="" className="about__img"/>
            <span className="about__span">{text}</span>
        </li>
    );
}


function About() {
    return (
        <section className="about" id="about">
            <div className="container about__container">
                <div className="about__info">
                    <h1 className="about__title">О НАС</h1>
                    <ul className="about__list">
                        <AboutItem text="проверенные поставщики"/>
                        <AboutItem text="качественные материалы"/>
                        <AboutItem text="лучшие мастера"/>
                    </ul>
                </div>

                <h1 className="about__text">
                    более <br />
                    <span>20</span> <br />
                    лет опыта
                </h1>
            </div>
        </section>
    )
}


export default About;