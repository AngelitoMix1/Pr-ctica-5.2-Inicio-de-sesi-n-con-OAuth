const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors');

const app = express();

// Configuración de CORS para permitir cookies desde el frontend
app.use(cors({ 
    origin: 'http://localhost:4200', 
    credentials: true 
}));

// Configuración de la sesión
app.use(session({
  secret: 'clave_secreta_pachuca', // Puedes cambiar esto
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // false porque estamos en localhost (HTTP)
}));

app.use(passport.initialize());
app.use(passport.session());

// Serialización del usuario para la sesión
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// ESTRATEGIA DE GOOGLE
passport.use(new GoogleStrategy(
  {
    clientID: "AQUI VA EL ID PROPIO", 
    clientSecret: "AQUI VA EL SECRET PROPIO",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // Aquí recibimos el perfil de Google
    return done(null, profile);
  }
));

// --- RUTAS ---

// 1. Iniciar el flujo de autenticación
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// 2. Callback donde Google nos redirige
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:4200/login' }),
  (req, res) => {
    // Redirigir al home de Angular tras éxito
    res.redirect('http://localhost:4200/home?logged=true');
  }
);

// 3. Ruta para que Angular consulte los datos del usuario
app.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: 'No autorizado' });
  }
});

// 4. Logout
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:4200/');
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));