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

//BUSCA

const searchInput = document.getElementById('searchInput');
const tabs = document.querySelectorAll('.radio');

searchInput.addEventListener('focus', function() {
    document.getElementById('dois').checked = true;
});

searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card-full');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// Evento para redefinir busca ao mudar de aba
tabs.forEach(tab => {
    tab.addEventListener('change', function() {
        // Limpa o campo de busca
        searchInput.value = '';
        searchInput.style.display = 'none';
        const cards = document.querySelectorAll('.card-full');
        
        // Mostra todos os cards novamente
        cards.forEach(card => {
            card.style.display = '';
        });
    });
});

// Funcionalidade do ícone de busca
(function() {
    const searchIcon = document.getElementById('searchIcon');

    searchIcon.addEventListener('click', function() {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
        }
    });
})();