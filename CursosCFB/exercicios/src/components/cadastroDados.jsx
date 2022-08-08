import React, {useState} from 'react'
import './CadastroDados.css'

   
    export default function CadastroDados() {   

            //Objeto State para armazenar os dados colocados pelo usuário
            const [pessoa, setPessoa] = useState({
                nome:"",
                sobrenome:"",
                email:"",
                confirmaEmail:"",
                senha:"",
                confirmaSenha:""
            })

            //Lista para manipular os objetos cadastrados
            const PessoasCadastradas=[]

            //função handle para manipular os dados inseridos na tela
            const handlePessoaChange = (e) => {
                 if(e.target.getAttribute('name') == 'fnome') {
                    setPessoa({nome: e.target.value, sobrenome: pessoa.sobrenome, email: pessoa.email, confirmaEmail: pessoa.confirmaEmail, senha: pessoa.senha, confirmaSenha: pessoa.confirmaSenha}) 
                } else if(e.target.getAttribute('name') == 'fsobrenome'){ 
                    setPessoa({nome: pessoa.nome, sobrenome: e.target.value, email: pessoa.email, confirmaEmail: pessoa.confirmaEmail, senha: pessoa.senha, confirmaSenha: pessoa.confirmaSenha})
                } else if(e.target.getAttribute('name') == 'femail') { 
                    setPessoa({nome: pessoa.nome, sobrenome: pessoa.sobrenome, email: e.target.value, confirmaEmail: pessoa.confirmaEmail, senha: pessoa.senha, confirmaSenha: pessoa.confirmaSenha}) 
                } else if(e.target.getAttribute('name') == 'fconfirmaEmail') { 
                    setPessoa({nome: pessoa.nome, sobrenome: pessoa.sobrenome, email: pessoa.email, confirmaEmail: e.target.value, senha: pessoa.senha, confirmaSenha: pessoa.confirmaSenha})
                } else if(e.target.getAttribute('name') == 'fsenha'){
                    setPessoa({nome: pessoa.nome, sobrenome: pessoa.sobrenome, email: pessoa.email, confirmaEmail: pessoa.confirmaEmail, senha: e.target.value, confirmaSenha: pessoa.confirmaSenha})
                } else if(e.target.getAttribute('name') == 'fconfirmaSenha'){ 
                    setPessoa({nome: pessoa.nome, sobrenome: pessoa.sobrenome, email: pessoa.email, confirmaEmail: pessoa.confirmaEmail, senha: pessoa.senha, confirmaSenha: e.target.value})
                }
            }

    return (
            <>
            <article>
                    <form>
                        <h2>Cadastro de dados</h2>
                        <label>Nome: </label>
                        <input type='text' name='fnome' onChange={(e)=>handlePessoaChange(e)}></input>
                        <label> Sobrenome: </label>
                        <input type='text' name='fsobrenome'onChange={(e)=>handlePessoaChange(e)}></input>
                        <br></br>
                        <label> E-mail: </label>
                        <input type='text' name='femail'onChange={(e)=>handlePessoaChange(e)}></input>
                        <label> Confirma e-mail: </label>
                        <input type='text' name='fconfirmaEmail'onChange={(e)=>handlePessoaChange(e)}></input>
                        <br></br>
                        <label>Senha: </label>
                        <input name='fsenha'onChange={(e)=>handlePessoaChange(e)}></input>
                        <label> Confirme sua senha: </label>
                        <input name='fconfirmaSenha'onChange={(e)=>handlePessoaChange(e)}></input>
                        <br></br>
        <               input type='button' value='Cadastrar' onClick={''}></input>
                    </form>
        </article>
            </>
        )
    }

