const UserController = require("../controllers/users.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/user/register", UserController.register);
  app.post("/api/user/login", UserController.login);
  app.post("/api/user/logout", UserController.logout);
  app.get("/api/users", UserController.getAllUsers);
  app.get("/api/user/:id", UserController.getUser);
  app.get("/api/project/:userID/:projectID", UserController.getProject);
  app.patch("/api/user/:id", UserController.update);
  app.patch("/api/addLogEntry/:userID/:projectID", UserController.addLogEntry);
  app.patch(
    "/api/deleteProject/:userID/:projectID",
    UserController.deleteProject
  );
};

// note: when testing in Postman, take 'authenticate' out of the getAllUsers request to make test

// TO-DO:
// 1. write a route for deleting a project
// 2. write a route for deleting a log entry
