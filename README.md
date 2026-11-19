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

**Un seul fichier : `assets/config.js`.**

```js
POLAR_CHECKOUT_URL: "",   // page de paiement de la licence Entreprise
POLAR_PORTAL_URL: ""      // espace client Polar (clés, factures)
```

Tant que la valeur est vide, `/nilo/acheter.html` et `/nilo/compte.html` (et leurs équivalents
`/en/nilo/…`) affichent « ouvre bientôt ». Dès qu'une URL `https://…` (hôte `polar.sh` ou sous-domaine uniquement) est renseignée, la page
redirige automatiquement. L'application Nilo pointe déjà vers ces deux pages ; tous les boutons
« Acheter » du site pointent vers `/nilo/acheter.html` (ou `/en/nilo/buy.html`).

## À compléter

- Mentions légales : médiateur de la consommation (non connu, absent du texte actuel ; à ajouter si requis).
- Lien de la fiche Microsoft Store dans `nilo/index.html` et `en/nilo/index.html` (commentaire
  `À COMPLÉTER`) ; en attendant, le lien renvoie vers la page des téléchargements.

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
