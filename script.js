// Base de dados de exemplo do curso da Alura
const livros = [
  { titulo: "JavaScript", preco: 25 },
  { titulo: "PHP", preco: 15 },
  { titulo: "Java", preco: 30 },
  { titulo: "Elixir", preco: 50 },
  { titulo: "Go", preco: 45 },
  { titulo: "Python", preco: 20 }
];

// Elementos do DOM
const bookListElement = document.getElementById('book-list');
const cheapestTitleElement = document.getElementById('cheapest-title');
const cheapestPriceElement = document.getElementById('cheapest-price');
const btnSortAsc = document.getElementById('btn-sort-asc');
const btnSortDesc = document.getElementById('btn-sort-desc');

// Função auxiliar para formatar moeda
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 1. Encontrar o menor preço (Algoritmo do curso)
function encontrarMenorPreco(listaProdutos) {
  let maisBarato = 0;

  for (let atual = 0; atual < listaProdutos.length; atual++) {
    if (listaProdutos[atual].preco < listaProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }

  return listaProdutos[maisBarato];
}

// 2. Renderizar lista na tela
function renderizarLivros(lista) {
  bookListElement.innerHTML = '';

  lista.forEach(livro => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${livro.titulo}</h3>
      <span class="card-price">${formatarMoeda(livro.preco)}</span>
    `;
    bookListElement.appendChild(card);
  });
}

// 3. Atualizar o card de destaque do mais barato
function atualizarMenorPrecoDestaque() {
  const livroMaisBarato = encontrarMenorPreco(livros);
  cheapestTitleElement.textContent = livroMaisBarato.titulo;
  cheapestPriceElement.textContent = formatarMoeda(livroMaisBarato.preco);
}

// 4. Algoritmos de Ordenação
function ordenarMenorPreco() {
  const listaOrdenada = [...livros].sort((a, b) => a.preco - b.preco);
  renderizarLivros(listaOrdenada);
}

function ordenarMaiorPreco() {
  const listaOrdenada = [...livros].sort((a, b) => b.preco - a.preco);
  renderizarLivros(listaOrdenada);
}

// Event Listeners
btnSortAsc.addEventListener('click', ordenarMenorPreco);
btnSortDesc.addEventListener('click', ordenarMaiorPreco);

// Inicialização da página
atualizarMenorPrecoDestaque();
renderizarLivros(livros);