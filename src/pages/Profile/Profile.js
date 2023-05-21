import React, { useState } from 'react';

import Header from '../../components/Profile/Header';
import Aside from '../../components/Profile/Aside';
import Forms from '../../components/Profile/Forms';

import Modal from '../../components/Modal';

import './Profile.css'

function Profile() {

    let [modalVisible, setModalVisible] = useState(false);
    let [modalData, setModalData] = useState({title: "", text: "", ok: false});
    
    return (
        <>
            <Header />
            <main className="profile">
                <div className="container profile__container">
                    <div className="profile__content">
                        <Aside setModalVisible={setModalVisible} setModalData={setModalData}/>
                        <Forms setModalVisible={setModalVisible} setModalData={setModalData}/>
                    </div>
                </div>
            </main>
            <Modal data={modalData} visible={modalVisible} setVisible={setModalVisible}/>
        </>
    );
}


export default Profile;