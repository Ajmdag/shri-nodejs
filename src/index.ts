const express = require("express");
const app = express();

// Controllers
const statusController = require('./controllers/statusController');
const apiEventsController = require('./controllers/apiEventsController');
const universalController = require('./controllers/universalController');

let server = 8000;

app.get("/api/events", apiEventsController);

app.get("/status", statusController.statusController);

app.get("*", universalController);

server = app.listen(server, () => {
  statusController.time = new Date();
});
