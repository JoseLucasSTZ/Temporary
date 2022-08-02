import React, {useState} from 'react'
import './CadastroDados.css'

   
    export default function CadastroDados() {   

        const [nome, setNome]= useState()
        const [sobrenome, setSobrenome] = useState()
        const [email, setEmail] = useState()
        const [confirmaEmail, setConfirmaEmail] = useState()
        const [senha, setSenha] = useState()
        const [confirmaSenha, setConfirmaSenha] = useState()

      
        
    return (
        <form>
            <h2>Cadastro de dados</h2>
            <label>Nome: </label>
            <input type='text' onChange={(e)=>setNome(e.target.value)}></input>
            <label> Sobrenome: </label>
            <input type='text' onChange={(e)=>setSobrenome(e.target.value)}></input>
            <br></br>
            <label> E-mail: </label>
            <input type='text' onChange={(e)=>setEmail(e.target.value)}></input>
            <label> Confirma e-mail: </label>
            <input type='text' onChange={(e)=>setConfirmaEmail(e.target.value)}></input>
            <br></br>
            <label>Senha: </label>
            <input onChange={(e)=>setSenha(e.target.value)}></input>
            <label> Confirme sua senha: </label>
            <input onChange={(e)=>setConfirmaSenha(e.target.value)}></input>
            <br></br>
            <input type='button' value='Cadastrar' onClick={console.log(nome, sobrenome, email,confirmaEmail,senha,setConfirmaSenha)}></input>
        </form>
    )
}