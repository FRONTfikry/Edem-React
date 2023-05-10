import React from 'react';

import formAreaTextImg from '../../assets/icons/form-area-text.svg'

function FormAreaText() {
    return (
        <div className="form__area">
            <div className="area__symbol">
                <img src={formAreaTextImg} alt="" />
            </div>
            <input type="text" className="area__input" name="login" placeholder="login"/>
        </div>  
    );
}


export default FormAreaText;