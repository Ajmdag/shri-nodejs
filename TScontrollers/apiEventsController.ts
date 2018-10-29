const json = require("../events");

type eventsItem = {
	type: string,
	title: string,
	source: string,
	time: string,
	description: string,
	icon: string,
	size: string,
	data: object
};

module.exports = (req, res) => {
	let isQueryValid = json.events.some((item: eventsItem) => {
		if (req.query.type === undefined) {
			return true;
		}
		return item.type === req.query.type;
	});

	if (isQueryValid) {
		res.send(
			json.events.filter((item: eventsItem) => {
				return req.query.type ? item.type === req.query.type : item;
			})
		);
	} else {
		res.status(400).send("<h1>400 incorrect type</h1>");
	}
};

