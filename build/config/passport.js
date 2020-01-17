"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passportLocal = require("passport-local");

var _userModel = _interopRequireDefault(require("./../server/userModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(passport) {
  passport.serializeUser(function (user, done) {
    console.log("USER", user);
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    console.log("ID", id);

    _userModel["default"].findById(id, function (err, user) {
      return done(err, user);
    });
  });
  passport.use('local-signup', new _passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, done) {
    process.nextTick(function () {
      _userModel["default"].findOne({
        'email': email
      }, function (err, user) {
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
          var newUser = new _userModel["default"](req.body);
          newUser.email = email;
          newUser.password = newUser.generateHash(password);
          newUser.save(function (err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));
};

exports["default"] = _default;