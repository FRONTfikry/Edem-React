import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import UsersContext from '../../contexts/UsersContext';

import FormAreaText from './FormAreaText';
import FormAreaPassword from './FormAreaPassword';


function SignUp() {

    let [users, setUsers] = useContext(UsersContext)

    function submitHandler(e) {
        e.preventDefault()

        let login = e.target.elements.login.value
        let primaryPassword = e.target.elements.password[0].value;
        let checkPassword = e.target.elements.password[1].value;

        if(!login || !primaryPassword || !checkPassword) return
        if(primaryPassword !== checkPassword) return
        if(typeof users.find((element) => element.login === login) !== 'undefined') return

        setUsers(users => [...users, {login: login, password: primaryPassword, cart: []}])
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