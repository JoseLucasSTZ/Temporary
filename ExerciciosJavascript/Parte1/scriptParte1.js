const botao = document.getElementById("botao");
const listaItens = document.getElementById("listaItens");
const botaoAumentar = document.getElementById("botaoAumentar");
const botaoDiminuir = document.getElementById("botaoDiminuir");
const checkBoxQueMudaFundo = document.getElementById("checkBoxQueMudaFundo");
const botaoFormExercicio5 = document.getElementById("botaoFormExercicio5");
const botaoRemoverItemExercicio1 = document.getElementById("botaoRemoverItemExercicio1");
const exercicio6Texto = document.getElementById("exercicio6Texto");
const exercicio6Botao = document.getElementById("exercicio6Botao");
const paragrafoExercicio6 = document.getElementById("paragrafoExercicio6");
const divExercicio8 = document.getElementById("divExercicio8");
const exercicio8Botao = document.getElementById("exercicio8Botao");
const botaoExercicio9 = document.getElementById("botaoExercicio9");
const imagemExercicio9 = document.getElementById("imagemExercicio9");
const botao2Exercicio9 = document.getElementById("botao2Exercicio9");
const botaoExercicio10 = document.getElementById("botaoExercicio10");
const inputTextoExercicio10 = document.getElementById("inputTextoExercicio10");
const paragrafoExercicio10 = document.getElementById("paragrafoExercicio10");

let linhaOndeAdicionaCelulas = document.getElementById("linhaOndeAdicionaCelulas");
let paragrafoQueMudaDeFundo = document.getElementById("paragrafoQueMudaDeFundo");
let imagemQueAumentaEDiminui = document.getElementById("imagemQueAumentaEDiminui");
let NomeFormExercicio5 = document.getElementById("NomeFormExercicio5");
let ProfissaoFormExercicio5 = document.getElementById("ProfissaoFormExercicio5");
let idadeFormExercicio5 = document.getElementById("idadeFormExercicio5");

/*Exercícios 1 e 2 */

let contador = 0;

botao.addEventListener('click', () => {
  contador += 1;
  console.log(contador)
});

botao.addEventListener('click', () => {
  let novoItem = document.createElement("li");
  novoItem.appendChild(document.createTextNode("item adicionado!"));
  listaItens.appendChild(novoItem);
});

botaoRemoverItemExercicio1.addEventListener('click', () => {
  listaItens.removeChild(listaItens.lastChild)
});

/* Exercício 03 */

botaoAumentar.addEventListener('click', () => {
  let larguraAtualDaImagem = imagemQueAumentaEDiminui.clientWidth;
  let alturaAtualDaImage = imagemQueAumentaEDiminui.clientHeight;

  let percentualDeAumento = 10;

  let novaLarguraDaImagem = larguraAtualDaImagem * (1 + percentualDeAumento / 100);
  let novaAlturaDaImagem = alturaAtualDaImage * (1 + percentualDeAumento / 100);

  imagemQueAumentaEDiminui.style.width = novaLarguraDaImagem + 'px';
  imagemQueAumentaEDiminui.style.height = novaAlturaDaImagem + 'px';
});

botaoDiminuir.addEventListener('click', () => {
  let larguraAtualDaImagem = imagemQueAumentaEDiminui.clientWidth;
  let alturaAtualDaImage = imagemQueAumentaEDiminui.clientHeight;

  let percentualDeDiminuicao = 10;

  let novaLarguraDaImagem = larguraAtualDaImagem * (1 - percentualDeDiminuicao / 100);
  let novaAlturaDaImagem = alturaAtualDaImage * (1 - percentualDeDiminuicao / 100);

  imagemQueAumentaEDiminui.style.width = novaLarguraDaImagem + 'px';
  imagemQueAumentaEDiminui.style.height = novaAlturaDaImagem + 'px';
});

/*Exercício 04*/

checkBoxQueMudaFundo.addEventListener('change', () => {
  if (!checkBoxQueMudaFundo.checked) {
    paragrafoQueMudaDeFundo.style.background = 'rgb(59, 58, 58)';
  } else {
    paragrafoQueMudaDeFundo.style.background = 'blue';
  }
});

/*Exercício 05*/

botaoFormExercicio5.addEventListener('click', () => {
  let novaLinha = document.createElement('tr')
  let novaCelulaNome = document.createElement('td');
  let novaCelulaProfissao = document.createElement('td');
  let novaCelulaIdade = document.createElement('td');

  novaCelulaNome.appendChild(document.createTextNode(NomeFormExercicio5.value));
  novaCelulaProfissao.appendChild(document.createTextNode(ProfissaoFormExercicio5.value));
  novaCelulaIdade.appendChild(document.createTextNode(idadeFormExercicio5.value));

  novaLinha.appendChild(novaCelulaNome);
  novaLinha.appendChild(novaCelulaProfissao);
  novaLinha.appendChild(novaCelulaIdade);
  linhaOndeAdicionaCelulas.appendChild(novaLinha);

});

/*Exercício 07*/

exercicio6Botao.addEventListener('click', () => {
  let texto = exercicio6Texto.value;
  paragrafoExercicio6.innerHTML += '<strong>' + texto + '</strong>';
});

/*Exercício 08*/

exercicio8Botao.addEventListener('click', () => {
  divExercicio8.style.fontWeight = 'bold';
  setTimeout(() => {
    divExercicio8.style.transform = 'translateX(200px)';
    setTimeout(() => {
      divExercicio8.style.transform = 'translateY(200px)';
      setTimeout(() => {
        divExercicio8.style.transform = 'translateY(0px)';
        setTimeout(() => {
          divExercicio8.style.transform = 'translateY(0px)';
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);

});


/*Exercício 9*/

botaoExercicio9.addEventListener('click', () => {
  imagemExercicio9.src = 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80';
});

botao2Exercicio9.addEventListener('click', () => {
  imagemExercicio9.src = 'https://images.unsplash.com/photo-1683463170635-a39ce9b0ecaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
});

/* Exercício 10*/
function gerarCorAleatoria(){
  let cores = ['h1', 'h2', 'h3', 'h4'];
  let corAleatoria = cores[Math.floor(Math.random()*cores.length)];
  return corAleatoria;
}

botaoExercicio10.addEventListener('click', () => {
  let textoExercicio10 = inputTextoExercicio10.value;
  let corAleatorizada = gerarCorAleatoria();
  paragrafoExercicio10.innerHTML = textoExercicio10; 
  paragrafoExercicio10.setAttribute('class', corAleatorizada)

});
