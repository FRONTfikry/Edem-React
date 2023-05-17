import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import UsersContext from '../../contexts/UsersContext';

import FormAreaText from './FormAreaText';
import FormAreaPassword from './FormAreaPassword';


function SignUp({setModalVisible, setModalData}) {

    let [users, setUsers] = useContext(UsersContext);

    function submitHandler(e) {
        e.preventDefault();

        let login = e.target.elements.login.value;
        let password = e.target.elements.password[0].value;
        let duplicatePassword = e.target.elements.password[1].value;

        if(!login || !password || !duplicatePassword) {
            setModalData({title: "Ошибка!", text: "Заполните все поля!", ok: false});
            setModalVisible(true);

            return;
        }
        
        if(password !== duplicatePassword) {
            setModalData({title: "Ошибка!", text: "Пароли не совпадают!", ok: false});
            setModalVisible(true);

            return;
        }

        if(typeof users.find((element) => element.login === login) !== 'undefined') {
            setModalData({title: "Ошибка!", text: "Пользователь с таким логином уже существует", ok: false});
            setModalVisible(true);

            return;
        }

        setUsers(users => [...users, {login: login, password: password, cart: []}]);

        setModalData({title: "Успех!", text: "Регистрация прошла успешно!", ok: true});
        setModalVisible(true);
    }

    return (
        <form className="auth__form" onSubmit={submitHandler}>
            <FormAreaText />
            <FormAreaPassword />
            <FormAreaPassword />

            <div className="form__action-block">    
                <Link to="/" className="btn--action form__anchor">назад</Link>
                <button type="submit" className="btn--action form__btn" >зарегистрироваться</button>
            </div>
        </form>
    );
}


export default SignUp;