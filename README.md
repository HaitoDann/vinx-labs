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

- Lien Lemon Squeezy : chercher `VOTRE-BOUTIQUE.lemonsqueezy.com` dans `nilo/index.html` et `en/nilo/index.html`.
- Mentions légales : remplacer les champs surlignés en jaune dans `mentions-legales.html` et `en/legal.html`.
- Domaine : créer un fichier `CNAME` contenant le domaine (`vinxlabs.fr`), puis configurer le DNS
  (Settings → Pages → Custom domain).

## Mise en ligne

GitHub Pages en mode « Deploy from a branch » : branche `main`, dossier `/ (root)`. Domaine : `vinxlabs.fr` (fichier `CNAME`).

## Prévisualiser

```bash
python3 -m http.server 8000
```
