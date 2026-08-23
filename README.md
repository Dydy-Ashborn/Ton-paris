# Ici c'est ton Paris

PWA supporter pour deux personnes : Dylan et Carlos. Les matchs des clubs qu'on suit,
la chaîne de diffusion en un coup d'œil, l'actu du PSG, et des notifications au bon moment.

## Démarrer

Le guide complet de mise en route est dans **[INSTALLATION.md](INSTALLATION.md)**.

```bash
npm install
cp .env.example .env.local   # puis remplir
npm run dev
```

## Ce que fait l'app

- **Accueil** — l'actu du club favori et les matchs du jour, avec la chaîne
- **Matchs** — le calendrier de tous les clubs suivis, filtrable, amicaux inclus
- **Classement** — championnats et Ligue des Champions, clubs suivis surlignés
- **Réglages** — clubs, sélection, notifications, abonnements TV

Chaque utilisateur a son propre club favori, sa sélection et jusqu'à 5 clubs suivis.
Les flux sont personnels, la base de données est partagée.

## Architecture

```
React + Vite (PWA)  →  Firestore (cache)  ←  Cloud Functions (crons)
                                                ├── scraping TV (2 sources)
                                                ├── flux RSS actus
                                                ├── API classements
                                                └── notifications FCM
```

L'app ne lit jamais une source externe directement : tout passe par le cache Firestore,
alimenté par des fonctions planifiées. Rien ne tourne en continu.

## Documentation

| Fichier | Contenu |
|---|---|
| [INSTALLATION.md](INSTALLATION.md) | Mise en route pas à pas |
| [docs/map-index.md](docs/map-index.md) | Aiguillage général des modules |
| [docs/map-front.md](docs/map-front.md) | Pages, composants, hooks |
| [docs/map-functions.md](docs/map-functions.md) | Cloud Functions et crons |
| [docs/map-donnees.md](docs/map-donnees.md) | Structure Firestore et règles |
| [docs/decisions.md](docs/decisions.md) | Choix d'architecture et pourquoi |

## Points fragiles connus

1. **Les sélecteurs de scraping** n'ont pas été testés en conditions réelles. Prévois un ajustement au premier lancement.
2. **Les URL de flux RSS** sont à vérifier avant déploiement.
3. **Le rapprochement des noms d'équipes** entre sources est heuristique — quelques cas peuvent rater.
