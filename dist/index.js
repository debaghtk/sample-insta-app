"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _passport = _interopRequireDefault(require("passport"));

var _db = require("./utils/db");

var _user = _interopRequireDefault(require("./user/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 3000;
app.use(_passport.default.initialize());
app.use((0, _bodyParser.json)());
app.use("/", _user.default);
app.listen(port, async () => {
  await (0, _db.connect)();
  console.log(`Server listening on ${port}`);
});