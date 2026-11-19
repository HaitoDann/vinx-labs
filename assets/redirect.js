/* Redirige vers l'URL Polar de assets/config.js si elle est renseignée (body[data-target] = checkout | portal).
   Seules les URL https dont l'hôte est polar.sh ou un sous-domaine de polar.sh sont acceptées. */
(function () {
  var c = window.VINX_CONFIG || {};
  var key = document.body.getAttribute("data-target") === "portal" ? "POLAR_PORTAL_URL" : "POLAR_CHECKOUT_URL";
  var raw = typeof c[key] === "string" ? c[key].trim() : "";
  if (!raw) return;
  var u;
  try { u = new URL(raw); } catch (e) { return; }
  var h = u.hostname.toLowerCase();
  if (u.protocol !== "https:" || !(h === "polar.sh" || h.slice(-9) === ".polar.sh")) return;
  var m = document.getElementById("redir");
  if (m) m.hidden = false;
  location.replace(u.href);
})();
