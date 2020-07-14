"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _passportFacebook = _interopRequireDefault(require("passport-facebook"));

var _user = _interopRequireDefault(require("../user/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FacebookStrategy = _passportFacebook.default.Strategy;

_dotenv.default.config();

_passport.default.serializeUser(function (user, done) {
  done(null, user);
});

_passport.default.deserializeUser(function (obj, done) {
  done(null, obj);
});

_passport.default.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ["email", "name"]
}, function (accessToken, refreshToken, profile, done) {
  const {
    email,
    first_name,
    last_name
  } = profile._json;
  const userData = {
    email,
    firstName: first_name,
    lastName: last_name
  };
  new _user.default(userData).save();
  done(null, profile);
}));