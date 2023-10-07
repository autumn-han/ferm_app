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
  app.patch("/api/addProject/:id", UserController.addProject);
  app.patch("/api/addLogEntry/:userID/:projectID", UserController.addLogEntry);
  app.patch("/api/editProject/:userID/:projectID", UserController.editProject);
  app.patch(
    "/api/deleteProject/:userID/:projectID",
    UserController.deleteProject
  );
  app.patch(
    "/api/editLogEntry/:userID/:projectID/:logID",
    UserController.editLogEntry
  );
  app.patch(
    "/api/deleteLogEntry/:userID/:projectID/:logID",
    UserController.deleteLogEntry
  );
};

// note: when testing in Postman, take 'authenticate' out of the getAllUsers request to make test

// TO-DOs:
// 1. write a route for updating a log entry
