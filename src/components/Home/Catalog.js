import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import catalog from '../../database/catalog.json'

import CatalogItem from '../CatalogItem';

import ActiveUserContext from '../../contexts/ActiveUserContext'


function Catalog() {
    let [activeUser] = useContext(ActiveUserContext);

    return (
        <section className="catalog-preview" id="catalog-preview">
            <div className="container catalog-preview__container">
                <h1 className="catalog-preview__title">КАТАЛОГ</h1> 
                <div className="catalog-preview__list">
                    {
                        catalog.slice(0, 3).map((item) => {
                            let itemAmount = activeUser?.cart?.find((element) => element.id === item.id)?.amount || 0

                            return <CatalogItem id={item.id} name={item.name} priceNew={item.priceNew} priceOld={item.priceOld} amount={itemAmount} key={item.id}/>
                        })
                    }
                </div>
                <Link to="/cart" className="catalog-preview__btn">ЕЩЁ</Link>
            </div>
        </section>
    );
}


export default Catalog;