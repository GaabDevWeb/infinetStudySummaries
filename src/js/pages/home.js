
(function () {
  'use strict';

  var trigger = document.getElementById('prompt-trigger');
  if (!trigger || !window.UI) return;

  var card = document.createElement('div');
  card.className = 'prompt-card';
  card.setAttribute('role', 'document');
  card.setAttribute('aria-label', 'Conteúdo do prompt');
  document.body.appendChild(card);

  var header = document.createElement('div');
  header.className = 'prompt-card-header';

  var copySpan = document.createElement('span');
  copySpan.className = 'prompt-card-copy';
  copySpan.textContent = 'Copiar';
  copySpan.setAttribute('role', 'button');
  copySpan.setAttribute('tabindex', '0');

  var closeBtn = document.createElement('button');
  closeBtn.className = 'prompt-card-close';
  closeBtn.textContent = '×';
  closeBtn.setAttribute('type', 'button');
  closeBtn.setAttribute('aria-label', 'Fechar');

  header.appendChild(copySpan);
  header.appendChild(closeBtn);
  card.appendChild(header);

  var body = document.createElement('div');
  body.className = 'prompt-card-body';
  card.appendChild(body);

  var cachedText = null;
  var hideTimeout = null;

  function renderMarkdown(text) {
    if (typeof marked === 'undefined') return text;
    var raw = marked.parse(text, { gfm: true });
    if (typeof raw !== 'string') return text;
    return raw.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }

  function showCard() {
    clearTimeout(hideTimeout);
    if (cachedText !== null) {
      body.innerHTML = renderMarkdown(cachedText);
      copySpan.textContent = 'Copiar';
      card.classList.add('visible');
    }
  }

  function hideCard() {
    card.classList.remove('visible');
  }

  function onCopy() {
    var text = cachedText !== null ? cachedText : body.textContent;
    if (!text) return;
    window.UI.copyToClipboard(text).then(function () {
      copySpan.textContent = 'Copiado';
      setTimeout(function () {
        copySpan.textContent = 'Copiar';
      }, 1500);
    });
  }

  closeBtn.addEventListener('click', hideCard);
  copySpan.addEventListener('click', onCopy);

  function loadAndShow() {
    if (cachedText !== null) {
      showCard();
      return;
    }
    fetch('content/promptAgente.md')
      .then(function (res) {
        if (!res.ok) throw new Error('Falha ao carregar');
        return res.text();
      })
      .then(function (text) {
        cachedText = text;
        body.innerHTML = renderMarkdown(text);
        copySpan.textContent = 'Copiar';
        card.classList.add('visible');
      })
      .catch(function () {
        cachedText = '';
        body.textContent = 'Não foi possível carregar o conteúdo.';
        card.classList.add('visible');
      });
  }

  trigger.addEventListener('mouseenter', loadAndShow);
  trigger.addEventListener('mouseleave', function () {
    hideTimeout = setTimeout(hideCard, 150);
  });
  card.addEventListener('mouseenter', function () {
    clearTimeout(hideTimeout);
  });
  card.addEventListener('mouseleave', hideCard);
})();
