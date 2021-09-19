const axios = require("axios");

export function addNewQueue({ value }) {
	axios
		.post("/api/items", { value })
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}

export function showQueue() {
	axios
		.get("/api/items")
		.then((res) => res.data.length)
		.catch((err) => console.log(err));
}
