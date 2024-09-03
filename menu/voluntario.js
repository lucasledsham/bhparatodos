function moverCarrossel(esquerda, secao) {
  const secaoAtual = document.getElementById(secao);
  const carrossel = secaoAtual.closest('.carrossel');

  const direcao = esquerda ? -1 : 1;
  carrossel.scrollLeft += direcao * secaoAtual.offsetWidth;
}

function adicionarEventosParaSecao(secao) {
  const setaEsquerda = document.getElementById(`seta-carrossel-esquerda-${secao}`);
  const setaDireita = document.getElementById(`seta-carrossel-direita-${secao}`);

  if (setaEsquerda) {
    setaEsquerda.addEventListener("click", function (e) {
      e.preventDefault();
      moverCarrossel(true, secao);
    });
  }

  if (setaDireita) {
    setaDireita.addEventListener("click", function (e) {
      e.preventDefault();
      moverCarrossel(false, secao);
    });
  }
}

// Adicione eventos para todas as seções de carrossel necessárias
document.querySelectorAll('.carrossel section').forEach(section => {
  adicionarEventosParaSecao(section.id);
});
