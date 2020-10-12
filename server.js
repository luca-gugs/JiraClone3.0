const express = require('express');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
var cors = require('cors');

require('./config/passport.js')(passport);

//Connect Database
connectDB();

//Init Middleware
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => res.send('API running '));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/boards', require('./routes/api/boards'));
app.use('/api/columns', require('./routes/api/columns'));
app.use('/api/cards', require('./routes/api/cards'));
app.use('/api/posts', require('./routes/api/posts'));
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get(
  '/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login'],
  }),
  function (req, res) {
    console.log(req, 'req');
  }
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    res.redirect('/good');
  }
);

// Serve Static Assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 7808;

app.listen(PORT, () => console.log('server started on port ${PORT}'));
