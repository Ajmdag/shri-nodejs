const timeNow = new Date() - time;
const timeNowSeconds = Math.round((timeNow / 1000) % 60);
const timeNowMinutes = Math.round((timeNow / 1000 / 60) % 60);
const timeNowHours = Math.round(timeNow / 1000 / 60 / 60);
res.send(`${timeNowHours}:${timeNowMinutes}:${timeNowSeconds}`);
