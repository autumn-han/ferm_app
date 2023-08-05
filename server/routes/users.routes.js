const UserController = require("../controllers/users.controller");

module.exports = (app) => {
  app.post("/api/user/register", UserController.register);
  app.post("/api/user/login", UserController.login);
  app.post("/api/user/logout", UserController.logout);
  app.get("/api/user/:id", UserController.getUser);
  app.patch("/api/user/:id", UserController.update);
};
