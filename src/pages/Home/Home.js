import React, { useContext } from 'react';

import Header from '../../components/Home/Header';

import Hero from '../../components/Home/Hero';

import './Home.css'

function Home() {

    return (
        <>
            <Header/>
            <main className="main">
                <Hero />
            </main>
        </>
    );
}

export default Home;