"use strict";
const json = require("../../events");
module.exports = (req, res) => {
    const isQueryValid = json.events.some((item) => {
        if (req.query.type === undefined) {
            return true;
        }
        return item.type === req.query.type;
    });
    if (isQueryValid) {
        res.send(json.events.filter((item) => {
            return req.query.type ? item.type === req.query.type : item;
        }));
    }
    else {
        res.status(400).send("<h1>400 incorrect type</h1>");
    }
};
