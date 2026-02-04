
(function () {
  'use strict';

  var container = document.getElementById('aula-content');
  if (!container || !window.UI) return;

  var params = new URLSearchParams(window.location.search);
  var disciplinaId = params.get('disciplina');
  var aulaSlug = params.get('aula');

  var breadcrumbEl = document.getElementById('aula-breadcrumb');
  var prevNextWrap = document.getElementById('aula-prev-next');
  var errorEl = document.getElementById('aula-error');
  

  function showError(msg) {
    if (errorEl) {
      errorEl.innerHTML = '<p>' + window.UI.escapeHtml(msg) + '</p><p><a href="resumos.html" class="btn">Ver resumos</a></p>';
      errorEl.hidden = false;
    }
    if (container) container.hidden = true;
    if (prevNextWrap) prevNextWrap.hidden = true;
  }

  if (!disciplinaId || !aulaSlug) {
    showError('Disciplina ou aula não informada. Use os links da página de resumos.');
    return;
  }

  var disc = window.DISCIPLINAS && window.DISCIPLINAS.find(function (d) { return d.id === disciplinaId; });
  if (!disc) {
    showError('Disciplina não encontrada.');
    return;
  }

  var aulaIndex = disc.aulas.indexOf(aulaSlug);
  if (aulaIndex === -1) {
    showError('Aula não encontrada nesta disciplina.');
    return;
  }

  function renderMarkdown(text) {
    if (typeof marked === 'undefined') return text;
    var raw = marked.parse(text, { gfm: true });
    if (typeof raw !== 'string') return text;
    return raw.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }

  

  var path = 'content/' + encodeURIComponent(disciplinaId) + '/' + encodeURIComponent(aulaSlug) + '.md';
  fetch(path)
    .then(function (res) {
      if (!res.ok) throw new Error('Arquivo não encontrado.');
      return res.text();
    })
    .then(function (text) {
      if (errorEl) errorEl.hidden = true;

      if (breadcrumbEl) {
        breadcrumbEl.innerHTML = '';
        var link = document.createElement('a');
        link.href = 'resumos.html?disciplina=' + encodeURIComponent(disc.id);
        link.textContent = disc.nome;
        link.className = 'aula-breadcrumb-link';
        breadcrumbEl.appendChild(link);
        breadcrumbEl.appendChild(document.createTextNode(' > Aula ' + (aulaIndex + 1)));
      }

      container.innerHTML = renderMarkdown(text);
      container.hidden = false;
      renderPrevNext(disc, aulaIndex);
      if (prevNextWrap) prevNextWrap.hidden = false;
    })
    .catch(function () {
      showError('Não foi possível carregar o conteúdo desta aula.');
    });

  function renderPrevNext(disc, index) {
    if (!prevNextWrap) return;
    var prevSlug = index > 0 ? disc.aulas[index - 1] : null;
    var nextSlug = index < disc.aulas.length - 1 ? disc.aulas[index + 1] : null;
    var html = '';
    if (prevSlug) {
      html += '<a href="aula.html?disciplina=' + encodeURIComponent(disc.id) + '&aula=' + encodeURIComponent(prevSlug) + '" class="btn">Aula anterior</a> ';
    }
    if (nextSlug) {
      html += '<a href="aula.html?disciplina=' + encodeURIComponent(disc.id) + '&aula=' + encodeURIComponent(nextSlug) + '" class="btn">Próxima aula</a>';
    }
    prevNextWrap.innerHTML = html;
  }
})();
