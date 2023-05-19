const textoExercicio1 = document.getElementById("textoExercicio1");
const botaoExercicio1 = document.getElementById("botaoExercicio1");
const selecaoExercicio1 = document.getElementById("selecaoExercicio1");
const opcaoNaoDestacarExercicio1 = document.getElementById("opcaoNaoDestacarExercicio1");
const opcaoDestacarExercicio1 = document.getElementById("opcaoDestacarExercicio1");
const botaoExercicio2 = document.getElementById("botaoExercicio2");
const textoExercicio2 = document.getElementById("textoExercicio2");
const paragrafoExercicio2 = document.getElementById("paragrafoExercicio2");
const arquivoExercicio2 = document.getElementById("arquivoExercicio2");

/*Exercício 1*/

botaoExercicio1.addEventListener('click', () => {
    let opcaoEscolhida = selecaoExercicio1.value;

    if (opcaoEscolhida == 'Destacar') {
        textoExercicio1.classList.add('destacado');
    } else {
        textoExercicio1.classList.remove('destacado');
    };
});

/*Exercício 2*/
arquivoExercicio2.addEventListener('change', ()=>{
    
})

botaoExercicio2.addEventListener('click', () => {
   let piada = 
   paragrafoExercicio2.innerHTML= textoExercicio2.value
});


/* 

Código em estudo:

<!DOCTYPE html>
<html>
<head>
  <title>Leitura de arquivo JSON</title>
  <script>
    // Função para lidar com a seleção do arquivo
    function handleFileSelect(event) {
      const file = event.target.files[0]; // Obtém o arquivo selecionado

      const reader = new FileReader(); // Cria uma instância do FileReader

      reader.onload = function(event) {
        const jsonContent = event.target.result; // Obtém o conteúdo do arquivo como texto
        const data = JSON.parse(jsonContent); // Faz o parsing do conteúdo JSON em um objeto JavaScript
        // Faça algo com os dados do arquivo JSON
        console.log(data); // Exibe os dados no console
      };

      reader.readAsText(file); // Lê o conteúdo do arquivo como texto
    }
  </script>
</head>
<body>
  <input type="file" accept=".json" onchange="handleFileSelect(event)"> <!-- Input para seleção do arquivo -->
</body>
</html>

*/

/*Exercício 3*/

/*Exercício 4*/

/*Exercício 5*/

/*Exercício 6*/

/*Exercício 7*/

/*Exercício 8*/

/*Exercício 9*/