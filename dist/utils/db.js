"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connect = async () => {
  const db = _mongoose.default.connection;

  _mongoose.default.connect("mongodb://localhost/TestDb", {
    useNewUrlParser: true
  });

  db.on("error", console.error.bind(console, "connection error:"));
  await db.once("open", () => {
    console.log("Db connected successfully");
  });
};

exports.connect = connect;