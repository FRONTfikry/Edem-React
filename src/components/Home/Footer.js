import React from 'react';

import footerImg from '../../assets/icons/logo.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <a href="/#" className="footer__caption">
                    <img src={footerImg} alt="" className="footer__img" /> 
                    <p className="footer__name">EDEM</p>
                </a>

                <p className="footer__copyright">© Э. А. Мугнецян 2022</p>
            </div>
        </footer>
    );
}


export default Footer;