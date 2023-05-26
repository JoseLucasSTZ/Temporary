const textoExercicio1 = document.getElementById("textoExercicio1");
const botaoExercicio1 = document.getElementById("botaoExercicio1");
const selecaoExercicio1 = document.getElementById("selecaoExercicio1");
const opcaoNaoDestacarExercicio1 = document.getElementById(
  "opcaoNaoDestacarExercicio1"
);
const opcaoDestacarExercicio1 = document.getElementById(
  "opcaoDestacarExercicio1"
);
const botaoExercicio2 = document.getElementById("botaoExercicio2");
const paragrafoExercicio2 = document.getElementById("paragrafoExercicio2");
const arquivoExercicio2 = document.getElementById("arquivoExercicio2");
const formExercicio3 = document.getElementById("formExercicio3");
const NomeExercicio3 = document.getElementById("NomeExercicio3");
const emailExercicio3 = document.getElementById("emailExercicio3");
const idadeExercicio3 = document.getElementById("idadeExercicio3");
const botaoExercicio3 = document.getElementById("botaoExercicio3");
const secao3 = document.getElementById("secao3");
const botaoPausarExercicio4 = document.getElementById("botaoPausarExercicio4");
const botaoResetarExercicio4 = document.getElementById(
  "botaoResetarExercicio4"
);
const botaoIniciarExercicio4 = document.getElementById(
  "botaoIniciarExercicio4"
);

const horaCronometro = document.getElementById("horaCronometro");
const minutoCronometro =document.getElementById("minutoCronometro");
const segundoCronometro = document.getElementById("segundoCronometro");

let contadorTempo;
let horas = 0;
let minutos = 0;
let segundos = 0;

/*Exercício 1*/

botaoExercicio1.addEventListener("click", () => {
  let opcaoEscolhida = selecaoExercicio1.value;

  if (opcaoEscolhida == "Destacar") {
    textoExercicio1.classList.add("destacado");
  } else {
    textoExercicio1.classList.remove("destacado");
  }
});

/*Exercício 2*/
arquivoExercicio2.addEventListener("change", () => {});

botaoExercicio2.addEventListener("click", () => {
  let ListaPiadas = arquivoExercicio2.files[0];
  let leitor = new FileReader();
  let dadosPiadas;

  leitor.onload = (evento) => {
    conteudoArquivo = evento.target.result;
    dadosPiadas = JSON.parse(conteudoArquivo);
    let dadosPiadasFormatados = "";

    for (let piada of dadosPiadas.piadas) {
      dadosPiadasFormatados += ` <p>Pergunta:${piada.pergunta} <br><br> Resposta: ${piada.resposta} <br> -----------------------</p>`;
    }
    paragrafoExercicio2.innerHTML = dadosPiadasFormatados;
  };
  leitor.readAsText(ListaPiadas);
});

/*Exercício 3*/

botaoExercicio3.addEventListener("click", (evento) => {
  evento.preventDefault();
  let idade = idadeExercicio3.value;
  let nome = NomeExercicio3.value;
  let email = emailExercicio3.value;

  if (nome.trim() != "" && idade.trim() != "" && email.trim() != "") {
    let novoElemento = document.createElement("p");
    novoElemento.textContent = `Nome: ${nome}, Idade: ${idade}, E-mail: ${email}`;
    secao3.appendChild(novoElemento);
  } else {
    if (nome.trim() === "") {
      alert("Favor preencher seu nome");
    }
    if (idade.trim() === "") {
      alert("Favor preencher sua idade");
    }
    if (email.trim() === "") {
      alert("Favor preencher seu email");
    }
  }
});

/*Exercício 4*/

function logicaCronometro() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos >= 60) {
    minutos = 0;
    horas++;
  }
horaCronometro.
}

botaoIniciarExercicio4.addEventListener("click", () => {
  contadorTempo = setInterval(logicaCronometro, 1000);
});

botaoPausarExercicio4.addEventListener("click", () => {
  contadorTempo = 0;
  console.log(segundos);
  console.log(minutos);
  console.log(horas);
});

botaoResetarExercicio4.addEventListener("click", () => {
  minutos = 0;
  segundos = 0;
  horas = 0;
});

/*Exercício 5*/

/*Exercício 6*/

/*Exercício 7*/

/*Exercício 8*/

/*Exercício 9*/
