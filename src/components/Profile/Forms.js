import React, { useContext } from 'react';
import ActiveUserContext from '../../contexts/ActiveUserContext';
import UsersContext from '../../contexts/UsersContext';


function Forms({setModalVisible, setModalData}) {

    let [users, setUsers] = useContext(UsersContext)
    let [activeUser] = useContext(ActiveUserContext);


    function passwordHandler(e) {
        e.preventDefault();

        let password = e.target.elements[0].value.replace(/\s/g, '');
        
        if(!password) {
            setModalData({title: "Ошибка!", text: "Неправильный ввод!", ok: false});
            setModalVisible(true);
            return;
        }

        if(password === users[activeUser].password) {
            setModalData({title: "Ошибка!", text: "Новый пароль равен старому!", ok: false});
            setModalVisible(true);

            return;
        }

        setUsers(users => {
            return {...users, [activeUser]: {...users[activeUser], password: password}};
        })

        setModalData({title: "Успех!", text: "Пароль изменен", ok: true});
        setModalVisible(true);
    }

    function balanceHandler(e) {
        e.preventDefault();

        let balance = e.target.elements[0].value.replace(/\s/g, '');

        if(isNaN(balance)) {
            setModalData({title: "Ошибка!", text: "Неправильный ввод!", ok: false});
            setModalVisible(true);
            return;
        }

        setUsers(users => {
            let currentBalance = Number(users[activeUser].balance) + Number(balance);

            return {...users, [activeUser]: {...users[activeUser], balance: currentBalance}};
        })

        setModalData({title: "Успех!", text: "Баланс пополнен", ok: true});
        setModalVisible(true);
    }


    return (
        <div className="profile__forms">
            <Form onSubmit={passwordHandler} buttonText="сменить" inputPlaceholder="пароль..."/>
            <Form onSubmit={balanceHandler} buttonText="пополнить" inputPlaceholder="счет..."/>
        </div>
    );
}


function Form({onSubmit, buttonText, inputPlaceholder}) {
    return (
        <form className="profile__form" onSubmit={onSubmit}>
            <input type="text" className="profile__input" placeholder={inputPlaceholder}/>
            <button className="btn--action profile__btn form-btn" >{buttonText}</button>
        </form>
    );
}


export default Forms;