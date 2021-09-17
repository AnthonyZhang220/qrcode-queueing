const axios = require("axios");

export function addNewQueue({ value }) {
	axios
		.post("https://jsonplaceholder.typicode.com/users", { value })
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}

export function showQueue() {
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.data.length)
		.catch((err) => console.log(err));
}
