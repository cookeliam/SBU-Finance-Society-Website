'use client';

import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tagline from '../components/Tagline';

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <title>Stony Brook Finance Society</title>
            <meta name="description" content="Club page for the Stony Brook Finance Society" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Figtree:wght@700&display=swap" rel="stylesheet" /> 
        </Head>
        
        <Navbar/>
        <Tagline/>

        {children}

        <Footer/>
        </>
    )
}