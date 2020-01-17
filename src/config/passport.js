import { Strategy } from 'passport-local';
import User from './../server/userModel.js';

export default (passport) => {
  passport.serializeUser((user, done) => {
    console.log("USER", user);
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    console.log("ID", id);
    User.findById(id, (err, user) => done(err, user))
  });
  passport.use('local-signup', new Strategy(
    {
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    (req, email, password, done) => {
      process.nextTick(() => {
        User.findOne({'email': email}, (err, user) => {
          if (err) return done(err);
          if (user) {
            if (user.validPassword(password)) {
              console.log('password valid');
              return done(null, user);
            } else {
              console.log('Invalid email or password');
              return done(null, false);
            }
          } else {
            var newUser = new User(req.body);
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }
  ));
};
