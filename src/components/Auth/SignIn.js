import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import UsersContext from '../../contexts/UsersContext'
import ActiveUserContext from '../../contexts/ActiveUserContext';

import FormAreaText from './FormAreaText';
import FormAreaPassword from './FormAreaPassword';

function SignIn({setModalVisible, setModalData}) {

    let [users] = useContext(UsersContext);
    let [, setActiveUser] = useContext(ActiveUserContext);

    function submitHandler(e) {
        e.preventDefault();
        
        let login = e.target.elements.login.value.trim();
        let password = e.target.elements.password.value.trim();

        let user = users[login];

        if(!login || !password || typeof user === 'undefined' || user.password !== password) {
            setModalData({title: "Ошибка!", text: "Логин или пароль были введены неверно!", ok: false});
            setModalVisible(true);

            return;
        }

        setActiveUser(login);

        setModalData({title: "Успех!", text: "Вход осуществлен", ok: true});
        setModalVisible(true);
    }
    return (    
        <form className="auth__form" onSubmit={submitHandler}>
            <FormAreaText />
            <FormAreaPassword/>

            <div className="form__action-block">
                <Link to="/" className="btn--action form__anchor">назад</Link>
                <button type="submit" className="btn--action form__btn" >войти</button>
            </div>
        </form>
    );
}


export default SignIn;