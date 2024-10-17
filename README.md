# vue-firebase

Diese Vue.js-Anwendung dient als exemplarische Umsetzung einer API-Anbindung an Google Firebase. Sie ermöglicht eine benutzerfreundliche Authentifizierung über E-Mail. Ein Benutzer kann sich mittels seiner E-Mail-Adresse und eines Passworts registrieren. Nach einem erfolgreichen Login erhält er Zugriff auf die geschützte Route "/secret". Falls ein Gast versucht, diese Route ohne vorherige Authentifizierung zu laden, wird eine Fehlermeldung angezeigt. Die Überwachung der Routennavigation erfolgt durch einen sogenannten Navigation Guard. Dieser Mechanismus gewährleistet, dass nur authentifizierte Benutzer Zugriff auf geschützte Bereiche der Anwendung erhalten.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Google Firebase Configuration in src/firebase.js

```
const firebaseConfig = {
    apiKey: "....",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
