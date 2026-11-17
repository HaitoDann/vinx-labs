# VinX Labs — site officiel

Site statique (HTML/CSS/JS, sans dépendance) hébergé sur GitHub Pages.

```
index.html             → accueil FR          en/index.html       → accueil EN
nilo/index.html        → page Nilo FR        en/nilo/index.html  → page Nilo EN
mentions-legales.html  → mentions + CGV FR   en/legal.html       → legal EN
assets/                → logo, favicon, vinx.css (thème VinX, vert)
nilo/                  → style.css, script.js, assets (thème Nilo, bleu)
```

## À compléter avant la mise en ligne

- Lien d'achat Polar : variable `TARGET` dans `nilo/acheter.html` (le bouton du site et celui de l'app y renvoient) ; espace client : `TARGET` dans `nilo/compte.html`.
- Mentions légales : remplacer les champs surlignés en jaune dans `mentions-legales.html` et `en/legal.html`.
- Domaine : créer un fichier `CNAME` contenant le domaine (`vinxlabs.fr`), puis configurer le DNS
  (Settings → Pages → Custom domain).

## Mise en ligne

GitHub Pages en mode « Deploy from a branch » : branche `main`, dossier `/ (root)`. Domaine : `vinxlabs.fr` (fichier `CNAME`).

## Prévisualiser

```bash
python3 -m http.server 8000
```
