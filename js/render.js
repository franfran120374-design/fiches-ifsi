/* ============================================================
   render.js — rendu des blocs de fiche + utilitaires DOM
   ============================================================ */
(function (global) {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // Mise en forme légère : **gras**, *italique*, `code`
  function inline(s) {
    var t = esc(s);
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    return t;
  }

  var TITRES = {
    cle: 'À retenir', piege: 'Piège classique', mnemo: 'Moyen mnémotechnique',
    def: 'Définition', note: 'Note', tombe: 'Tombe souvent'
  };

  function bloc(b) {
    if (!b || !b.type) return '';
    switch (b.type) {

      case 'para':
        return '<p>' + inline(b.texte) + '</p>';

      case 'titre':
        return '<h' + (b.niveau === 3 ? '3' : '2') + '>' + esc(b.texte) + '</h' + (b.niveau === 3 ? '3' : '2') + '>';

      case 'liste': {
        var tag = b.ordonnee ? 'ol' : 'ul';
        var li = (b.items || []).map(function (x) { return '<li>' + inline(x) + '</li>'; }).join('');
        return '<' + tag + '>' + li + '</' + tag + '>';
      }

      case 'etapes': {
        var st = (b.items || []).map(function (x) { return '<li>' + inline(x) + '</li>'; }).join('');
        return '<ol class="steps">' + st + '</ol>';
      }

      case 'cle': case 'piege': case 'mnemo': case 'def': case 'note': case 'tombe': {
        var corps = b.items
          ? '<ul>' + b.items.map(function (x) { return '<li>' + inline(x) + '</li>'; }).join('') + '</ul>'
          : '<p>' + inline(b.texte) + '</p>';
        return '<div class="blk blk-callout blk-' + b.type + '">' +
          '<div class="blk-title">' + esc(b.titre || TITRES[b.type] || '') + '</div>' + corps + '</div>';
      }

      case 'tableau': {
        var th = '<tr>' + (b.entetes || []).map(function (h) { return '<th>' + inline(h) + '</th>'; }).join('') + '</tr>';
        var tr = (b.lignes || []).map(function (r) {
          return '<tr>' + r.map(function (c) { return '<td>' + inline(c) + '</td>'; }).join('') + '</tr>';
        }).join('');
        return '<div class="tbl-wrap"><table class="tbl"><thead>' + th + '</thead><tbody>' + tr + '</tbody></table></div>';
      }

      case 'schema':
        return '<figure class="schema">' + (b.svg || '') +
          (b.legende ? '<figcaption>' + inline(b.legende) + '</figcaption>' : '') + '</figure>';

      case 'flash': {
        var cards = (b.items || []).map(function (it) {
          return '<div class="flash" data-open="0" tabindex="0" role="button">' +
            '<div class="fq">' + inline(it.q) + '</div>' +
            '<div class="fa">' + inline(it.a) + '</div>' +
            '<div class="hint">Clique pour révéler</div></div>';
        }).join('');
        return '<div class="flashwrap">' + cards + '</div>';
      }

      default:
        return '';
    }
  }

  function blocs(list) {
    return (list || []).map(bloc).join('');
  }

  /* --- helpers DOM --- */
  function el(sel, root) { return (root || document).querySelector(sel); }
  function els(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function toast(msg, ms) {
    var t = el('#toast');
    if (!t) return;
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.hidden = true; }, ms || 2400);
  }

  function barre(pct) {
    var p = Math.max(0, Math.min(100, pct || 0));
    return '<div class="bar"><i style="width:' + p + '%"></i></div>';
  }

  global.R = { esc: esc, inline: inline, bloc: bloc, blocs: blocs, el: el, els: els, toast: toast, barre: barre };
})(window);
