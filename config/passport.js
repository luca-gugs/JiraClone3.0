const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleUser = require('../models/GoogleUsers');

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          '786724871396-k1pfdpd08vv7pi4in4007sj2cgbeards.apps.googleusercontent.com',
        clientSecret: 'fe1Cq-V8t1wRT-bAacuauK92',
        callbackURL: '/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile, 'profile');

        // const newUser = {
        //     googleId: profile.id,
        // }
      }
    )
  );
  passport.serializeUser(function (id, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
// passport.serializeUser(function (user, done) {
//   console.log(user, 'user');
//   done(null, user.id);
// });

// passport.deserializeUser(function (user, done) {
//   console.log(user, 'id');
//   done(err, user);
// });

// // Use the GoogleStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and Google
// //   profile), and invoke a callback with a user object.
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID:
//         '786724871396-k1pfdpd08vv7pi4in4007sj2cgbeards.apps.googleusercontent.com',
//       clientSecret: 'fe1Cq-V8t1wRT-bAacuauK92',
//       callbackURL: 'http://localhost:3050/google/callback',
//     },
//     function (accessToken, refreshToken, profile, done) {
//       console.log(profile, 'profile');
//       return done(err, profile);
//     }
//   )
// );
