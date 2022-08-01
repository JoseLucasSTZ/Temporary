import React from 'react'
import './BBody.css'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'
import Header from './Header'

export default function BBody() {
    return (
        <>
        <section className='Corpo'>
        <Header />
        <Main />
        <Aside />
        <Footer />
        </section>
        
        </>
    )
 } 