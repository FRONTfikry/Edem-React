import React from 'react';

import arrowImg from '../../assets/icons/arrow.svg';
import searchImg from '../../assets/icons/search.svg';

function Nav({setCurrentPattern, setIsIncrease}) {

    function submitHandler(e) {
        e.preventDefault();

        setCurrentPattern(e.target.elements.search.value);
    }

    return (
        <nav className="catalog__nav">
            <div className="catalog__filters">
                <FilterBtn text="цена" setIsIncrease={setIsIncrease}/>
            </div>

            <form className="catalog__search" onSubmit={submitHandler}>
                <input type="text" name="search" id="" className="search__input" placeholder="поиск.."/>
                <button className="search__btn">
                    <img src={searchImg} alt="" className="search__img" />
                </button>
            </form>
        </nav>
    );
}


function FilterBtn({text, setIsIncrease}) {
    return (
        <button className="filters__btn" onClick={() => setIsIncrease(isIncrease => !isIncrease)}>
            <span className="filters__span">{text}</span>
            <img className="filters__img" src={arrowImg} alt="" />
        </button>
    );
}

export default Nav;