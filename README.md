# Práctica 5.2 — Inicio de Sesión con OAuth 2.0

##  Descripción
Este proyecto implementa un sistema de autenticación utilizando **OAuth 2.0 con Google**.  

El frontend fue desarrollado con **Angular 17+**, mientras que el backend utiliza **Node.js + Express + Passport.js** para manejar el flujo de autenticación y las sesiones de usuario.

El sistema permite:
- Iniciar sesión con una cuenta de Google.
- Obtener información básica del usuario autenticado.
- Mantener la sesión activa mediante cookies.
- Cerrar sesión de forma segura.

---

# Tecnologías utilizadas

## Frontend
- Angular 17+
- TypeScript
- Axios

## Backend
- Node.js
- Express
- Passport.js
- passport-google-oauth20
- express-session

---

# Instalación y ejecución

## Clonar el repositorio

```bash
git clone https://github.com/AngelitoMix1/Practica-5.2-OAuth.git
cd Practica-5.2-OAuth
```

---

# Ejecutar el Backend

Abre una terminal dentro de la carpeta del servidor:

```bash
cd practica-oauth
```

Instala las dependencias:

```bash
npm install
```

Configura tus credenciales de Google OAuth dentro del archivo `server.js`:

```js
clientID: "TU_CLIENT_ID",
clientSecret: "TU_CLIENT_SECRET"
```

Inicia el servidor:

```bash
node server.js
```

El backend correrá en:

```txt
http://localhost:3000
```

---

# Ejecutar el Frontend

Abre una nueva terminal y entra a la carpeta del cliente:

```bash
cd practica-oauth-client
```

Instala las dependencias:

```bash
npm install
```

Inicia Angular:

```bash
ng serve
```

El frontend correrá en:

```txt
http://localhost:4200
```

---

# Probar el sistema

1. Abre el navegador en:

```txt
http://localhost:4200
```

2. Haz clic en **"Iniciar sesión con Google"**.

3. Selecciona una cuenta de Google.

4. El sistema mostrará la información del usuario autenticado.

---


