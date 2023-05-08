import React from 'react';

import Header from '../../components/Home/Header';

import Hero from '../../components/Home/Hero';
import About from '../../components/Home/About';
import Catalog from '../../components/Home/Catalog';

import Footer from '../../components/Home/Footer';

import './Home.css'

function Home() {

    return (
        <>
            <Header/>
            <main className="main">
                <Hero />
                <About />
                <Catalog />
            </main>
            <Footer />
        </>
    );
}

export default Home;