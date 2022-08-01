import React from 'react'
import './Main.css'
import ComponentMiddle from './ComponentMiddle'
import ComponentTop from './ComponentTop'
import ComponentBotton from './ComponentBotton'

export default function Main(){ 
    return(
        <>
        <section className='main'>
            <ComponentTop /> 
            <ComponentMiddle />
            <ComponentBotton />
            
        </section>
        </>
    )
}