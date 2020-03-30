const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileControler = require("./controllers/ProfileController");
const SessionControler = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionControler.create);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileControler.index);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

module.exports = routes;
