const botao = document.getElementById("botao");
const listaItens = document.getElementById("listaItens");
const botaoAumentar = document.getElementById("botaoAumentar");
const botaoDiminuir = document.getElementById("botaoDiminuir");
const checkBoxQueMudaFundo = document.getElementById("checkBoxQueMudaFundo");
const botaoFormExercicio5 = document.getElementById("botaoFormExercicio5");
const botaoRemoverItemExercicio1 = document.getElementById("botaoRemoverItemExercicio1");

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

/*Exercício 06*/