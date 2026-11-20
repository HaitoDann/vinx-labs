# VinX Labs — site officiel (vinxlabs.fr)

Site statique (HTML, CSS, JS), sans framework ni étape de build, hébergé sur GitHub Pages
(`CNAME` = `vinxlabs.fr`, `.nojekyll` conservé). Aucune ressource tierce : polices auto-hébergées,
aucun cookie, aucun outil de suivi, aucun appel à une API.

## Structure

```
index.html                 accueil FR            en/index.html             accueil EN
nilo/index.html            Nilo FR               en/nilo/index.html        Nilo EN
VinX-OS/index.html         VinX OS FR            en/VinX-OS/index.html     VinX OS EN
mentions-legales.html      mentions + CGV FR     en/legal.html             legal EN
confidentialite.html       confidentialité FR    en/privacy.html           privacy EN
nilo/acheter.html          achat (bientôt)       en/nilo/buy.html
nilo/compte.html           espace client         en/nilo/account.html
404.html                   page introuvable (bilingue, noindex)
sitemap.xml, robots.txt, CNAME, .nojekyll

assets/site.css            tokens (clair/sombre) et composants, un seul fichier
assets/site.js             bascule de thème (localStorage) et onglets accessibles
assets/theme.js            applique le thème mémorisé avant le premier rendu
assets/config.js           URL Polar (voir ci-dessous)
assets/redirect.js         redirection vers Polar quand une URL est renseignée
assets/fonts/              IBM Plex Sans / Mono (WOFF2, licence OFL jointe)
assets/img/                captures WebP (clair/sombre, FR/EN), logo Nilo
assets/vinx-logo.svg       logo VinX (aussi utilisé comme masque CSS)
assets/favicon.svg, assets/og.png, nilo/assets/og-nilo.png
```

## Où modifier les URL Polar

**Fichier principal : `assets/config.js`** (`POLAR_CHECKOUT_URL`, `POLAR_PORTAL_URL`).

`/nilo/acheter.html` et `/nilo/compte.html` (et `/en/nilo/buy.html`, `/en/nilo/account.html`)
redirigent vers ces URL, à condition qu'elles soient en `https` et sur `polar.sh` ou un
sous-domaine ; si une valeur est vide ou refusée, la page affiche « ouvre bientôt ». L'application
Nilo pointe déjà vers ces deux pages ; tous les boutons « Acheter » du site aussi.
Ces 4 pages contiennent en plus un lien direct de secours (cas sans JavaScript) : si l'URL change,
le mettre à jour aussi (chercher `polar.sh` dans `nilo/` et `en/nilo/`).

## À compléter

- Mentions légales (FR et EN) : médiateur de la consommation et TVA (champs `.todo`, commentaires `À COMPLÉTER`).
- Lien de la fiche Microsoft Store dans `nilo/index.html` et `en/nilo/index.html` (commentaire `À COMPLÉTER`) ; en attendant, le lien renvoie vers la page des téléchargements.
- VinX OS est non annoncé jusqu'à sa 1.0 publique : pages `VinX-OS/` et `en/VinX-OS/` en `noindex`, hors sitemap, sans aucun lien depuis les autres pages (accueil recomposé pour Nilo seul). Pour le ré-annoncer : retirer le `<meta name="robots">` des deux pages, les ajouter à `sitemap.xml`, et remettre les liens (carte et index de l'accueil, menu, pied de page, accueil EN) ; le générateur utilisé pour la refonte le fait en vidant son drapeau `UNANNOUNCED`.
- `vinx-os/index.html` (minuscules) redirige vers `/VinX-OS/` ; à ne pas confondre avec `VinX-OS/` (casse).

## Prévisualiser

```bash
python3 -m http.server 8000      # puis http://localhost:8000/
```

Les chemins sont absolus (`/assets/…`) : servir le dépôt à la racine du serveur.

## Conventions

- Thème : `color-scheme` + `light-dark()` ; les images ont une variante sombre servie par
  `<picture>` (`prefers-color-scheme`), synchronisée par `site.js` avec le bouton de thème.
- Chaque page FR a son équivalent EN (hreflang, canonical). Toute modification de texte se fait
  dans les deux langues.
- Mise en ligne : GitHub Pages, branche `main`, dossier `/ (root)`.
