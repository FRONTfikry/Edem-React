import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import catalog from '../../database/catalog.json'

import CatalogItem from '../CatalogItem';

import ActiveUserContext from '../../contexts/ActiveUserContext';
import UsersContext from '../../contexts/UsersContext';


function Catalog() {
    
    let [users] = useContext(UsersContext);
    let [activeUser] = useContext(ActiveUserContext);

    return (
        <section className="catalog-preview" id="catalog-preview">
            <div className="container catalog-preview__container">
                <h1 className="catalog-preview__title">КАТАЛОГ</h1> 
                <div className="catalog-preview__list">
                    {
                        catalog.slice(0, 3).map(({id, name, priceNew, priceOld}) => {
                            let itemAmount =  users[activeUser]?.cart?.find((element) => element.id === id)?.amount || 0;

                            return <CatalogItem id={id} name={name} priceNew={priceNew} priceOld={priceOld} amount={itemAmount} key={id}/>;
                        })
                    }
                </div>
                <Link to="/cart" className="catalog-preview__btn">ЕЩЁ</Link>
            </div>
        </section>
    );
}


export default Catalog;