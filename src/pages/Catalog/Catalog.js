import React, { useContext, useState } from 'react';

import catalog from '../../database/catalog.json';

import ActiveUserContext from '../../contexts/ActiveUserContext';
import UsersContext from '../../contexts/UsersContext';

import Header from '../../components/Catalog/Header';
import Nav from '../../components/Catalog/Nav';

import CatalogItem from '../../components/CatalogItem';

import './Catalog.css';


function Catalog() {
    let [users] = useContext(UsersContext)
    let [activeUser] = useContext(ActiveUserContext);

    let [currentPattern, setCurrentPattern] = useState("");
    let [isIncrease, setIsIncrease] = useState(true);

    return (
        <>  
            <Header/>
            <main className="catalog">
                <div className="container catalog__container">
                    <Nav setCurrentPattern={setCurrentPattern} setIsIncrease={setIsIncrease}/>
                    <div className="catalog__list">
                        {
                            catalog
                            .filter(({name}) => {
                                return name.includes(currentPattern);
                            })
                            .sort((a, b) => {
                                return isIncrease ? a.priceNew - b.priceNew : b.priceNew - a.priceNew;
                            })
                            .map(({id, name, priceNew, priceOld}) => {
                                let itemAmount = users[activeUser]?.cart?.find((element) => element.id === id)?.amount || 0;
    
                                return <CatalogItem id={id} name={name} priceNew={priceNew} priceOld={priceOld} amount={itemAmount} key={id}/>;
                            })
                        }
                    </div>
                </div>
            </main>
        </>

    );
}


export default Catalog;