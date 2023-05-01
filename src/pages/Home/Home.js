import React, { useContext } from 'react';

import Header from '../../components/Home/Header';

import Hero from '../../components/Home/Hero';
import About from '../../components/Home/About';

import './Home.css'

function Home() {

    return (
        <>
            <Header/>
            <main className="main">
                <Hero />
                <About />
            </main>
        </>
    );
}

export default Home;