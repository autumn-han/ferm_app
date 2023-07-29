const UserController = require("../controllers/users.controller");

module.exports = (app) => {
  app.post("/api/users", UserController.newUser);
  app.get("/api/users/:id", UserController.getUser);
};
