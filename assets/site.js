/* VinX Labs — JS minimal, sans dépendance : bascule de thème et onglets de vues. */
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : !!(mq && mq.matches);
  }

  /* <picture> : le media des <source> suit le thème effectif (sans JS : prefers-color-scheme seul). */
  function syncPictures() {
    var forced = root.getAttribute("data-theme");
    var srcs = document.querySelectorAll('picture source[data-dark]');
    for (var i = 0; i < srcs.length; i++) {
      srcs[i].media = forced ? (forced === "dark" ? "all" : "not all") : "(prefers-color-scheme: dark)";
    }
  }

  function syncButtons() {
    var btns = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute("aria-pressed", isDark() ? "true" : "false");
  }

  function toggle() {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("vinx-theme", next); } catch (e) {}
    syncPictures(); syncButtons();
  }

  var btns = document.querySelectorAll("[data-theme-toggle]");
  for (var b = 0; b < btns.length; b++) btns[b].addEventListener("click", toggle);
  if (mq && mq.addEventListener) mq.addEventListener("change", syncButtons);
  syncPictures(); syncButtons();

  /* Onglets accessibles : flèches, Début, Fin ; un seul onglet dans l'ordre de tabulation. */
  var groups = document.querySelectorAll(".tabsec");
  Array.prototype.forEach.call(groups, function (g) {
    var tabs = Array.prototype.slice.call(g.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(g.querySelectorAll('[role="tabpanel"]'));
    function select(i, focus) {
      tabs.forEach(function (t, j) {
        t.setAttribute("aria-selected", j === i ? "true" : "false");
        t.tabIndex = j === i ? 0 : -1;
        panels[j].hidden = j !== i;
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(i, false); });
      t.addEventListener("keydown", function (e) {
        var n = tabs.length, k = e.key, j = -1;
        if (k === "ArrowRight" || k === "ArrowDown") j = (i + 1) % n;
        else if (k === "ArrowLeft" || k === "ArrowUp") j = (i + n - 1) % n;
        else if (k === "Home") j = 0;
        else if (k === "End") j = n - 1;
        if (j >= 0) { e.preventDefault(); select(j, true); }
      });
    });
    select(0, false);
  });

  /* Menu déroulant : fermeture au clic extérieur et avec Échap. */
  document.addEventListener("click", function (e) {
    Array.prototype.forEach.call(document.querySelectorAll("details.dd[open]"), function (d) { if (!d.contains(e.target)) d.open = false; });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") Array.prototype.forEach.call(document.querySelectorAll("details.dd[open]"), function (d) { d.open = false; d.querySelector("summary").focus(); });
  });

  /* Copier une adresse. */
  Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), function (b) {
    b.addEventListener("click", function () {
      var t = document.getElementById(b.getAttribute("data-copy")).textContent.trim(), old = b.textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { b.textContent = "✓"; setTimeout(function () { b.textContent = old; }, 1500); });
    });
  });

  /* Produits : défilement continu dès qu'il y en a au moins trois. */
  Array.prototype.forEach.call(document.querySelectorAll(".prods-t"), function (t) {
    var r = t.querySelector(".prods-r");
    if (r && r.children.length >= 3) { r.innerHTML += r.innerHTML.replace(/<li>/g, '<li aria-hidden="true">'); t.classList.add("run"); }
  });
})();
