import React, { useContext } from 'react';

import UsersContext from '../../contexts/UsersContext';
import ActiveUserContext from '../../contexts/ActiveUserContext';

import profileImg from '../../assets/icons/profile-white.svg';


function Aside({setModalVisible, setModalData}) {
    let [users, setUsers] = useContext(UsersContext);
    let [activeUser, setActiveUser] = useContext(ActiveUserContext);

    function quitHandler() {
        setModalData({title: "Успех!", text: "Выход осуществлен!", ok: true});
        setModalVisible(true);

        setTimeout(() => {
            setActiveUser(null);
        }, 1000)
    }

    function deleteHandler() {
        setModalData({title: "Успех!", text: "Аккаунт удален!", ok: true});
        setModalVisible(true);

        setTimeout(() => {
            setUsers(users => {
                let usersCopy = structuredClone(users);
    
                delete usersCopy[activeUser]
    
                return usersCopy;
            })
            setActiveUser(null);
        }, 1000)
    }

    return (
        <aside className="profile__aside">
            <header className="profile__header">
                <img src={profileImg} alt="" className="profile__img" />
                <h1 className="profile__name">{activeUser}</h1>
                <h3 className="profile__balance">Баланс: {users[activeUser].balance}</h3>
            </header>
            <div className="profile__actions">
                <button className="btn--action profile__btn quit-btn" onClick={quitHandler}>выйти</button>
                <button className="btn--action profile__btn delete-btn" onClick={deleteHandler}>удалить аккаунт</button>
            </div>
        </aside>
    );
}


export default Aside;