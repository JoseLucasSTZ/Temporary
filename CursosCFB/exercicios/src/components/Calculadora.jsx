import React, {useState} from 'react'
import './Calculadora.css'

export default function Calculadora() {
    const [n1, setNum1] = useState()
    const [n2, setNum2] = useState()
    const [operacao, setOperacao] = useState('+')
    const [resultado, setResultado] = useState()

    const calcular = (n1, n2, operacao) => {
        let res
        switch (operacao){
           
            case '+':
                return setResultado(n1 + n2);
                break
            case '-':
                return setResultado(n1 - n2);
                break
            case '/':
                return setResultado(n1 / n2);
                break
            case 'x':
                return setResultado(n1 * n2);
                break    
            default:
                console.log('Erro não identificado')
        }
        
    }

    return (
       <>
       <h2> Calculadora </h2>
        <form>
            <label> Primeiro número: </label>
            <input type='number' value ={n1}onChange={(e)=>setNum1(e.target.value)}></input>
            <br></br>
            <select value={operacao} onChange={(e)=>setOperacao(e.target.value)}>
                <option value = '+'> + </option>
                <option value = '-'> - </option>
                <option value = '/'> / </option>
                <option value = 'x'> x </option>
            </select>
            <br></br>
            <label> Segundo número: </label>
            <input type='number' value={n2} onChange={(e)=>setNum2(e.target.value)}></input>
            <br></br>
            <input type='button' value='Calcular' onClick={()=>calcular(Number(n1), Number(n2), operacao)}></input>
        </form>
        <div>
            <p>O resultado da operação foi: <span> {resultado} </span></p>
        </div>
       </>
    )
}
