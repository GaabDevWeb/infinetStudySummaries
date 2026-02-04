
(function (global) {
  'use strict';

  function byId(id) {
    return document.getElementById(id);
  }

  function qs(selector, parent) {
    parent = parent || document;
    return parent.querySelector(selector);
  }

  function qsAll(selector, parent) {
    parent = parent || document;
    return parent.querySelectorAll(selector);
  }


  function escapeHtml(str) {
    if (str == null) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }


  function copyToClipboard(text) {
    if (!text || typeof navigator === 'undefined' || !navigator.clipboard) {
      return Promise.reject(new Error('Clipboard não disponível'));
    }
    return navigator.clipboard.writeText(text);
  }


  function hideElement(el) {
    if (el) el.classList.remove('visible');
  }

  function showElement(el) {
    if (el) el.classList.add('visible');
  }


  function toggleClass(el, className, force) {
    if (!el) return;
    if (force === undefined) {
      el.classList.toggle(className);
    } else {
      el.classList.toggle(className, !!force);
    }
  }


  global.UI = {
    byId: byId,
    qs: qs,
    qsAll: qsAll,
    escapeHtml: escapeHtml,
    copyToClipboard: copyToClipboard,
    hideElement: hideElement,
    showElement: showElement,
    toggleClass: toggleClass
  };
})(typeof window !== 'undefined' ? window : this);
