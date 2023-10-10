const UserController = require("../controllers/users.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/user/register", UserController.register);
  app.post("/api/user/login", UserController.login);
  app.post("/api/user/logout", UserController.logout);
  app.get("/api/users", authenticate, UserController.getAllUsers);
  app.get("/api/user/:id", authenticate, UserController.getUser);
  app.get(
    "/api/project/:userID/:projectID",
    authenticate,
    UserController.getProject
  );
  app.patch("/api/user/:id", authenticate, UserController.update);
  app.patch("/api/addProject/:id", authenticate, UserController.addProject);
  app.patch(
    "/api/addLogEntry/:userID/:projectID",
    authenticate,
    UserController.addLogEntry
  );
  app.patch(
    "/api/editProject/:userID/:projectID",
    authenticate,
    UserController.editProject
  );
  app.patch(
    "/api/deleteProject/:userID/:projectID",
    UserController.deleteProject
  );
  app.patch(
    "/api/editLogEntry/:userID/:projectID/:logID",
    authenticate,
    UserController.editLogEntry
  );
  app.patch(
    "/api/deleteLogEntry/:userID/:projectID/:logID",
    UserController.deleteLogEntry
  );
};

// note: when testing in Postman, take 'authenticate' out of the getAllUsers request to make test

// TO-DO:
// 1. fix authenticate in delete methods for log entries and projects
