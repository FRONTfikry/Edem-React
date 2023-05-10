import React, { useContext, useState } from 'react';

import ActiveUserContext from '../contexts/ActiveUserContext';

import CatalogItemImg from '../assets/pictures/catalog-item-img.png'
import minusImg from '../assets/icons/minus.svg'
import plusImg from '../assets/icons/plus.svg'

import { useNavigate } from 'react-router-dom';


function CatalogItem({id, name, priceNew, priceOld, amount}) {

    let [activeUser, setActiveUser] = useContext(ActiveUserContext);

    let [count, setCount] = useState(1);
    
    let navigate = useNavigate();


    function submitHandler() {
        if(activeUser === null) {
            navigate('/auth')
            return
        }  

        // ? If true, then add to cart, else remove from cart
        if(amount === 0 && count > 0) {
            setActiveUser(user => {
                return {...user, cart: [...user.cart, {id: id, amount: count}]}
            })
        } else {
            setActiveUser(user => {
                return {...user, cart: user.cart.filter((element) => element.id !== id)}
            })
        }
    }

    return (
        <div className="catalog__item">
            <img src={CatalogItemImg} alt="" className="catalog__img" />

            <div className="catalog__price">
                <p className="price__new">{priceNew}</p>
                <sup className="price__old">{priceOld}</sup>
            </div>

            <h1 className="catalog__name">{name}</h1>

            <div className="catalog__count-action">
                <button className="amount-count__btn" onClick={() => setCount(count => count > 0 ? count - 1 : count)}>
                    <img src={minusImg} alt="" className="amount-count__img" />
                </button>
                <p className="amount-count__p">{count}</p>
                <button className="amount-count__btn" onClick={() => setCount(count => count + 1)}>
                    <img src={plusImg} alt="" className="amount-count__img" />
                </button>
            </div>

            <button className="catalog__btn btn--action" onClick={submitHandler}>
                {
                    amount !== 0
                    ? `удалить ${amount} из корзины`
                    : "добавить в корзину"
                }
            </button>
        </div>
    );
}


export default CatalogItem;
