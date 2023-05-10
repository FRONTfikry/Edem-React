import React, { useState } from 'react';

import SignIn from '../../components/Auth/SignIn';
import SignUp from '../../components/Auth/SignUp';

import './Auth.css'


function AuthItem({id, text, defaultChecked}) {
    return (
        <div className="auth__item">
            <input type="radio" className="auth__input" id={id} name="authMode" defaultChecked={defaultChecked}/>
            <label htmlFor={id} className="auth__label">{text}</label>
        </div>
    );
}

function Auth() {
    let [authMode, setAuthMode] = useState('signIn')


    function authModeHandler() {
        setAuthMode(authMode => authMode === 'signIn' ? 'signUp' : 'signIn')
    }
    

    return (
        <div className="auth">
            <div className="auth__inner">
                <nav className="auth__menu" onChange={authModeHandler}>
                    <AuthItem id="signIn" text="Вход" defaultChecked={true}/>
                    <AuthItem id="signUp" text="Регистрация" defaultChecked={false}/>
                </nav>
                    {
                        authMode === 'signIn'
                        ? <SignIn />
                        : <SignUp/>
                    }
            </div>
        </div>
    );
}


export default Auth;