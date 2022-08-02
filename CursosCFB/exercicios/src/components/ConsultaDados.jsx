import React from 'react'
import './ConsultaDados.css'

export default function ConsultaDados(){
    return (
        <>
        <h2>Consulta aos Dados</h2>
        <form>
            <label> Consulta por nome completo </label>
            <input type='text'></input>
            <br></br>
            <label> Consulta por CPF </label>
            <input type='text'></input>
            <br></br>
            <label> Consulta por ID </label>
            <input type='number'></input>
            <br></br>
            <input type='button' value='Consultar'></input>
        </form>
        </>
    )
}