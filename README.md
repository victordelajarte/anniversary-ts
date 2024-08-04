Ce repository est à but pédagogique, à titre d'exemple d'utilisation de Typescript.

## Objectif métier

L'objectif est de générer des événements dans mon calendrier pour que je n'oublie pas tous mes anniversaires de mariage à venir.

## Commandes:

- `npm dev`: lance en mode watch (tous les changements seront pris en compte et reflétés dans la console instantanément) le code typescript
- `npm check`: lance la vérification des types pour valider la conformité du code

## Explication des dépendances :

### devDependencies

- `@total-typescript/tsconfig`: config TS de base (cf Matt Pocock sur Youtube)
- `@types/node`: types de node pour simplifier le développement
- `tsx`: permet d'exécuter des fichiers TS directement
- `typescript`: évidemment...
- `husky`: pour une validation des types à chaque push
