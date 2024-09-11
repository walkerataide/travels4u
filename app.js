// Seleciona o botão de pesquisa no HTML
const botaoPesquisar = document.getElementById("btn-pesquisar-roteiro");

// Adiciona um listener de evento 'click' ao botão de pesquisa
// Quando o botão é clicado, a função 'pesquisar' é executada
botaoPesquisar.addEventListener("click", pesquisar);

// Função pesquisar - Responsável por gerar o HTML dos resultados da pesquisa
function pesquisar() {
  // Obtém a seção HTML com o ID 'resultados-pesquisa'
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Ops! Parece que sua viagem dos sonhos ainda não está mapeada por aqui. 😅 Que tal tentar outros termos ou explorar nossas categorias? 😉</p>";
    return;
  }

  // Inicializa a string que irá armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = [];

  // Itera sobre os dados importados do arquivo 'dados.js'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags;
    campoPesquisa = campoPesquisa.toLowerCase();

    // Verifica se o texto do campo de pesquisa está no título, descrição ou tags
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.some((tag) => tag.toLowerCase().includes(campoPesquisa))
    ) {
      // Cria o HTML de cada resultado da pesquisa
      resultados += `
        <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p>
            ${dado.descricao}
            </p>
            <a
            href=${dado.link}
            target="_blank"
            >Saiba mais</a
            >
        </div>
        `;
    }
  }

  // Define o conteúdo HTML da seção 'resultados-pesquisa' com os resultados gerados
  section.innerHTML = resultados;
}
