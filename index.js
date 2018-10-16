const json = require("./events"),
  express = require("express"),
  app = express();

let time, server;

app.get("/api/events", (req, res) => {
  let isQueryValid = json.events.some(item => {
    if (req.query.type === undefined) {
      return true;
    }
    return item.type === req.query.type;
  });

  if (isQueryValid) {
    res.send(
      json.events.filter(item => {
        return req.query.type ? item.type === req.query.type : item;
      })
    );
  } else {
    res.status(400).send("<h1>400 incorrect type</h1>");
  }
});

app.get("/status", (req, res) => {
  const timeNow = new Date() - time;
  const timeNowSeconds = Math.round((timeNow / 1000) % 60);
  const timeNowMinutes = Math.round((timeNow / 1000 / 60) % 60);
  const timeNowHours = Math.round(timeNow / 1000 / 60 / 60);
  res.send(`${timeNowHours}:${timeNowMinutes}:${timeNowSeconds}`);
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 page not found</h1>");
});

server = app.listen(8000, () => {
  time = new Date();
});
