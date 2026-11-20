/* URL Polar — SEUL endroit à modifier pour la redirection automatique.
   Les pages /nilo/acheter.html et /nilo/compte.html (et /en/nilo/buy.html, /en/nilo/account.html)
   redirigent vers ces URL (https, hôte polar.sh ou sous-domaine uniquement). Si une valeur est vide,
   la page affiche « ouvre bientôt ». L'application Nilo pointe déjà vers ces deux pages.
   Les 4 pages contiennent aussi un lien direct de secours (sans JavaScript) : le mettre à jour en même temps. */
window.VINX_CONFIG = {
  POLAR_CHECKOUT_URL: "https://buy.polar.sh/polar_cl_3xQMMHBxsJKOEaeX43e8qKiqGh30H2b5voqyV2xwtzp",
  POLAR_PORTAL_URL: "https://polar.sh/vinx-labs/portal"
};
