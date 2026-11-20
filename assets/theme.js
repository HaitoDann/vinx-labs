/* Thème clair/sombre : applique le choix mémorisé avant le premier rendu (chargé dans <head>). */
(function () {
  try {
    var t = localStorage.getItem("vinx-theme");
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
