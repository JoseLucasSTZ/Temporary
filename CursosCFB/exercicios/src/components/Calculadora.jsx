import React, {useState} from 'react'
import './Calculadora.css'

export default function Calculadora() {
    const [n1, setNum1] = useState(0)
    const [n2, setNum2] = useState(0)
    const [operacao, setOperacao] = useState('+')
    const [resultado, setResultado] = useState(0)

    const calcular = (n1, n2, operacao) => {
        switch (operacao){
            case '+':
                return setResultado(n1 + n2);
            case '-':
                return setResultado(n1 - n2);
            case '/':
                return setResultado(n1 / n2);
            case 'x':
                return setResultado(n1 * n2);
            default:
                console.log('Erro de operação')
        }
        
    }

    return (
       <>
       <p> Calculadora </p>
        <form>
            <label> Primeiro número: </label>
            <input type='number' value={n1} onChange={(e)=>setNum1(e.target.value)}></input>
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
            <input type='button' value='Calcular' onClick={()=>calcular()}></input>
        </form>
        <div>
            <p>O resultado da operação foi: <span> {resultado} </span></p>
        </div>
       </>
    )
}
