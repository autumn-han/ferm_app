const UserController = require("../controllers/users.controller");

module.exports = (app) => {
  app.post("/api/user/register", UserController.register);
  // app.post("/api/user/login", UserController.login);
  app.get("/api/user/:id", UserController.getUser);
};
