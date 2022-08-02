import React from 'react'
import './cadastroDados.css'

export default function cadastroDados() {
    return (
        <form>
            <p>Cadastro de dados</p>
            <label>Nome: </label>
            <input type='text'></input>
            <label> Sobrenome: </label>
            <input type='text'></input>
            <br></br>
            <label> E-mail: </label>
            <input type='text'></input>
            <label> Confirma e-mail: </label>
            <input type='text'></input>
            <br></br>
            <label>Senha: </label>
            <input></input>
            <label> Confirme sua senha: </label>
            <input></input>
            <br></br>
            <input type='button' value='Cadastrar'></input>
        </form>
    )
}