/* Redirige vers l'URL Polar de assets/config.js si elle est renseignée (body[data-target] = checkout | portal). */
(function () {
  var c = window.VINX_CONFIG || {};
  var key = document.body.getAttribute("data-target") === "portal" ? "POLAR_PORTAL_URL" : "POLAR_CHECKOUT_URL";
  var url = typeof c[key] === "string" ? c[key].trim() : "";
  if (/^https:\/\//i.test(url)) location.replace(url);
})();
