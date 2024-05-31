const AuthController = require("../controllers/auth.controller");
const route = require("express").Router();

route.get("/test", (req, res) => {
  res.send("Test auth routes!");
});

route.get("/login", AuthController.login);
route.get("/register", AuthController.register);


module.exports = route;