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
const minutoCronometro = document.getElementById("minutoCronometro");
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
arquivoExercicio2.addEventListener("change", () => { });

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

/*Exercício 4*/{

  function logicaCronometro() {
    segundos++;
    segundoCronometro.innerHTML = segundos.toString().padStart(2, 0);
    if (segundos >= 60) {
      segundos = 0;
      segundoCronometro.innerHTML = segundos.toString().padStart(2, 0);
      minutos++;
      minutoCronometro.innerHTML = minutos.toString().padStart(2, 0);
    }
    if (minutos >= 60) {
      minutos = 0;
      minutoCronometro.innerHTML = minutos.toString().padStart(2, 0);
      horas++;
      horaCronometro.innerHTML = horas.toString().padStart(2, 0);
    }

  }

  botaoIniciarExercicio4.addEventListener("click", () => {
    contadorTempo = setInterval(logicaCronometro, 1000);
  });

  botaoPausarExercicio4.addEventListener("click", () => {
    contadorTempo = 0;
  });

  botaoResetarExercicio4.addEventListener("click", () => {
    minutos = 0;
    segundos = 0;
    horas = 0;
  });
}
/*Exercício 5*/ {
  const exercicio5Anterior = document.getElementById('exercicio5Anterior');
  const exercicio5Posterior = document.getElementById('exercicio5Posterior');
  const ImagemExercicio5 = document.getElementById(`ImagemExercicio5`)
  let arrayExercicio5Fontes = ['https://images.unsplash.com/photo-1684848141072-6a0370502661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://plus.unsplash.com/premium_photo-1683309555671-7efeac6caa3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80']

  function avancaImagem() {

    if (ImagemExercicio5.src == arrayExercicio5Fontes[0]) {
      ImagemExercicio5.src = arrayExercicio5Fontes[1];
    } else if (ImagemExercicio5.src == arrayExercicio5Fontes[1]) {
      ImagemExercicio5.src = arrayExercicio5Fontes[2];
    } else if (ImagemExercicio5.src == arrayExercicio5Fontes[2]) {
      ImagemExercicio5.src = arrayExercicio5Fontes[0];
    }
  };

  function voltaImagem() {
    if (ImagemExercicio5.src == arrayExercicio5Fontes[0]) {
      ImagemExercicio5.src = arrayExercicio5Fontes[2];
    } else if (ImagemExercicio5.src == arrayExercicio5Fontes[1]) {
      ImagemExercicio5.src = arrayExercicio5Fontes[0];
    } else if (ImagemExercicio5.src == arrayExercicio5Fontes[2]) {
      ImagemExercicio5.src = arrayExercicio5Fontes[1];
    }
  };

  exercicio5Anterior.addEventListener('click', () => {
    voltaImagem();
  });


  exercicio5Posterior.addEventListener('click', () => {
    avancaImagem();
  });
}
/*Exercício 6 Versão 1*/{
  const exercicio6n1 = document.getElementById('exercicio6n1');
  const exercicio6n2 = document.getElementById('exercicio6n2');
  const exercicio6n3 = document.getElementById('exercicio6n3');
  const exercicio6n4 = document.getElementById('exercicio6n4');
  const exercicio6n5 = document.getElementById('exercicio6n5');
  const exercicio6n6 = document.getElementById('exercicio6n6');
  const exercicio6n7 = document.getElementById('exercicio6n7');
  const exercicio6n8 = document.getElementById('exercicio6n8');
  const exercicio6n9 = document.getElementById('exercicio6n9');
  const exercicio6n10 = document.getElementById('exercicio6n10');
  const exercicio6n11 = document.getElementById('exercicio6n11');
  const exercicio6n12 = document.getElementById('exercicio6n12');
  const exercicio6n13 = document.getElementById('exercicio6n13');
  const exercicio6n14 = document.getElementById('exercicio6n14');
  const exercicio6n15 = document.getElementById('exercicio6n15');
  const exercicio6n16 = document.getElementById('exercicio6n16');
  const exercicio6n17 = document.getElementById('exercicio6n17');
  const exercicio6n18 = document.getElementById('exercicio6n18');
  const exercicio6n19 = document.getElementById('exercicio6n19');
  const exercicio6n20 = document.getElementById('exercicio6n20');
  const exercicio6n21 = document.getElementById('exercicio6n21');
  const exercicio6n22 = document.getElementById('exercicio6n22');
  const exercicio6n23 = document.getElementById('exercicio6n23');
  const exercicio6n24 = document.getElementById('exercicio6n24');
  const exercicio6n25 = document.getElementById('exercicio6n25');
  const exercicio6n26 = document.getElementById('exercicio6n26');
  const exercicio6n27 = document.getElementById('exercicio6n27');
  const exercicio6n28 = document.getElementById('exercicio6n28');
  const exercicio6n29 = document.getElementById('exercicio6n29');
  const exercicio6n30 = document.getElementById('exercicio6n30');
  const exercicio6n31 = document.getElementById('exercicio6n31');

  const resultadoExercicio6Calendario = document.getElementById('resultadoExercicio6Calendario');

  exercicio6n1.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n1.textContent
  });

  exercicio6n2.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n2.textContent
  });
  exercicio6n3.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n3.textContent
  });
  exercicio6n4.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n4.textContent
  });
  exercicio6n5.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n5.textContent
  });
  exercicio6n6.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n6.textContent
  });
  exercicio6n7.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n7.textContent
  });
  exercicio6n8.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n8.textContent
  });
  exercicio6n9.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n9.textContent
  });
  exercicio6n10.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n10.textContent
  });
  exercicio6n11.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n11.textContent
  });
  exercicio6n12.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n12.textContent
  });
  exercicio6n13.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n13.textContent
  });
  exercicio6n14.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n14.textContent
  });
  exercicio6n15.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n15.textContent
  });
  exercicio6n16.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n16.textContent
  });
  exercicio6n17.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n17.textContent
  });
  exercicio6n18.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n18.textContent
  });
  exercicio6n19.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n19.textContent
  });
  exercicio6n20.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n20.textContent
  });
  exercicio6n21.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n21.textContent
  });
  exercicio6n22.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n22.textContent
  });
  exercicio6n23.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n23.textContent
  });
  exercicio6n24.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n24.textContent
  });
  exercicio6n25.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n25.textContent
  });
  exercicio6n26.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n26.textContent
  });
  exercicio6n27.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n27.textContent
  });
  exercicio6n28.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n28.textContent
  });
  exercicio6n29.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n29.textContent
  });
  exercicio6n30.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n30.textContent
  });
  exercicio6n31.addEventListener('click', () => {
    resultadoExercicio6Calendario.innerText = exercicio6n31.textContent
  });
}

/* Exercício 6 Versão 2 */{ }

/* */

/*Exercício 7*/

/*Exercício 8*/

/*Exercício 9*/
