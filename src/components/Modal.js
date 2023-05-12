import React from 'react';

import modalClose from '../assets/icons/modal-close.svg';
import modalOk from '../assets/icons/modal-ok.svg';
import modalError from '../assets/icons/modal-error.svg';

function Modal({data, visible, setVisible}) {
    return (
        <div className={visible ? "modal modal--active" : "modal"} onClick={() => setVisible(false)}>
            <div className={visible ? "modal__content modal__content--active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h1 className="modal__title">{data.title}</h1>

                    <button className="modal__btn" onClick={() => setVisible(false)}>
                        <img src={modalClose} alt="" />
                    </button>
                </div>

                <div className="modal__body">
                    <p className="modal__p">{data.text}</p>
                    <img src={data.ok ? modalOk : modalError} alt="" />
                </div>
            </div>
        </div>
    );
}


export default Modal;