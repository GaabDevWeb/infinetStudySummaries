
(function () {
  'use strict';

  var cardsEl = document.getElementById('resumos-cards');
  if (!cardsEl || !window.DISCIPLINAS || !window.UI) return;

  var placeholderEl = document.getElementById('resumos-placeholder');
  var wrapEl = document.getElementById('resumos-aulas-wrap');
  var listEl = document.getElementById('resumos-aulas-list');
  if (!wrapEl || !listEl) return;

  var selectedId = null;
  var params = new URLSearchParams(window.location.search);
  var initialDisciplina = params.get('disciplina');

  function renderCards() {
    cardsEl.innerHTML = '';
    window.DISCIPLINAS.forEach(function (d) {
      var card = document.createElement('a');
      card.href = '#';
      card.className = 'resumo-card' + (selectedId === d.id ? ' selected' : selectedId ? ' inactive' : '');
      card.setAttribute('data-id', d.id);
      card.setAttribute('aria-selected', selectedId === d.id ? 'true' : 'false');
      card.setAttribute('role', 'button');
      card.innerHTML = '<h2>' + window.UI.escapeHtml(d.nome) + '</h2><p>' + d.aulas.length + ' resumos disponíveis</p>';
      card.addEventListener('click', function (e) {
        e.preventDefault();
        selectDisciplina(d.id);
      });
      cardsEl.appendChild(card);
    });
  }

  function selectDisciplina(id) {
    selectedId = id;
    var d = window.DISCIPLINAS.find(function (x) { return x.id === id; });
    if (!d) return;

    renderCards();

    if (placeholderEl) {
      placeholderEl.classList.add('hidden');
    }
    wrapEl.classList.add('visible');
    wrapEl.setAttribute('aria-hidden', 'false');

    listEl.innerHTML = '';
    d.aulas.forEach(function (slug, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = 'aula.html?disciplina=' + encodeURIComponent(d.id) + '&aula=' + encodeURIComponent(slug);
      a.textContent = 'Aula ' + (i + 1);
      if (i === 0) {
        var badge = document.createElement('span');
        badge.className = 'aula-badge';
        badge.textContent = 'Começar por aqui';
        a.appendChild(document.createElement('br'));
        a.appendChild(badge);
      }
      li.appendChild(a);
      listEl.appendChild(li);
    });
  }

  function showPlaceholder() {
    if (placeholderEl) {
      placeholderEl.classList.remove('hidden');
    }
    wrapEl.classList.remove('visible');
    wrapEl.setAttribute('aria-hidden', 'true');
    listEl.innerHTML = '';
  }

  renderCards();

  if (initialDisciplina && window.DISCIPLINAS.some(function (d) { return d.id === initialDisciplina; })) {
    selectDisciplina(initialDisciplina);
  } else {
    showPlaceholder();
  }
})();
