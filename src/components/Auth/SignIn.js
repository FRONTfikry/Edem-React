import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import UsersContext from '../../contexts/UsersContext'
import ActiveUserContext from '../../contexts/ActiveUserContext';

import FormAreaText from './FormAreaText';
import FormAreaPassword from './FormAreaPassword';

function SignIn() {

    let [users, setUsers] = useContext(UsersContext)
    let [activeUser, setActiveUser] = useContext(ActiveUserContext)

    function submitHandler(e) {
        e.preventDefault()
        
        let login = e.target.elements.login.value
        let password = e.target.elements.password.value

        if(!login || !password) return

        let user = users.find((element) => element.login === login)

        if(typeof user === 'undefined') return

        setActiveUser(user)
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