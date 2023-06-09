import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ActiveUserContext from '../contexts/ActiveUserContext';
import UsersContext from '../contexts/UsersContext';

import CatalogItemImg from '../assets/pictures/catalog-item-img.png';
import minusImg from '../assets/icons/minus.svg';
import plusImg from '../assets/icons/plus.svg';


function CatalogItem({id, name, priceNew, priceOld, amount}) {
    
    let [users, setUsers] = useContext(UsersContext);
    let [activeUser, setActiveUser] = useContext(ActiveUserContext);

    let [count, setCount] = useState(1);
    
    let navigate = useNavigate();


    function submitHandler() {
        if(activeUser === null) {
            navigate('/auth');
            return;
        }  

        // ? add to cart || remove from cart
        let cart = (amount === 0 && count > 0)
        ? [...users[activeUser].cart, {id: id, amount: count}]
        : users[activeUser].cart.filter((element) => element.id !== id);

        setUsers(users => {
            return {...users, [activeUser]: {...users[activeUser], cart: cart}};
        });
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
