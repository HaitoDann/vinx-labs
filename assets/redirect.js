/* Redirige vers l'URL Polar de assets/config.js (body[data-target] = checkout | portal).
   Seules les URL https dont l'hôte est polar.sh ou un sous-domaine de polar.sh sont acceptées.
   Sinon (valeur vide ou refusée), la page affiche le message « ouvre bientôt ». */
(function () {
  var c = window.VINX_CONFIG || {};
  var key = document.body.getAttribute("data-target") === "portal" ? "POLAR_PORTAL_URL" : "POLAR_CHECKOUT_URL";
  var raw = typeof c[key] === "string" ? c[key].trim() : "";
  var u = null;
  try { u = raw ? new URL(raw) : null; } catch (e) { u = null; }
  var h = u ? u.hostname.toLowerCase() : "";
  if (u && u.protocol === "https:" && (h === "polar.sh" || h.slice(-9) === ".polar.sh")) {
    location.replace(u.href);
    return;
  }
  var r = document.getElementById("redir"), s = document.getElementById("soon");
  if (r) r.hidden = true;
  if (s) s.hidden = false;
})();
