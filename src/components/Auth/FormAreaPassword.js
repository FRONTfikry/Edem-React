import React, { useState } from 'react';

import formAreaPasswordImg from '../../assets/icons/form-area-password.svg';

import seePassImg from '../../assets/icons/see-pass.svg';
import seePassLineThroughImg from '../../assets/icons/see-pass-line-through.svg';

function FormAreaPassword() {
    
    let [visible, setVisible] = useState(false);

    function visibleHandler() {
        setVisible(visible => !visible);
    }

    return (
        <div className="form__area">
            <div className="area__symbol">
                <img src={formAreaPasswordImg} alt="" />
            </div>
            <input type={visible ? "text" : "password"} className="area__input" name="password" placeholder="password"/>

            <button type="button" className="area__btn" onClick={visibleHandler}>
                <img src={visible ? seePassLineThroughImg : seePassImg} alt="" />
            </button>
        </div>  
    );
}


export default FormAreaPassword;