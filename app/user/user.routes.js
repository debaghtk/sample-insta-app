import express from "express";
import passport from "passport";
import userController from "./user.controller";
import path from "path";

const userRouter = express.Router();

userRouter.get("/auth/facebook", passport.authenticate("facebook"));

userRouter.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/fail"
  })
);

userRouter.get("/fail", (req, res) => {
  res.send("Failed attempt");
});

userRouter.get("/", (req, res) => {
  res.send("Success");
});

userRouter.get("/login",(req, res) => {
  var loginPath = path.join(__dirname + '/login.html')
  res.sendFile(loginPath);
});
export default userRouter;
