"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _user = _interopRequireDefault(require("./user.controller"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = _express.default.Router();

userRouter.get("/auth/facebook", _passport.default.authenticate("facebook"));
userRouter.get("/auth/facebook/callback", _passport.default.authenticate("facebook", {
  successRedirect: "/",
  failureRedirect: "/fail"
}));
userRouter.get("/fail", (req, res) => {
  res.send("Failed attempt");
});
userRouter.get("/", (req, res) => {
  res.send("Success");
});
userRouter.get("/login", (req, res) => {
  var loginPath = _path.default.join(__dirname + '/login.html');

  res.sendFile(loginPath);
});
var _default = userRouter;
exports.default = _default;