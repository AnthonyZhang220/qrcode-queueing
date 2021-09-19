import React from "react";
// import { addNewQueue } from "../../server/main";
import axios from 'axios';
import styles from "./index.module.css";

function Form() {
	
	
	const getQueneNumber = (e) => {
		// e.preventDefault();

		const customer = new FormData(e.target);
		const value = Object.fromEntries(customer.entries());

		// addNewQueue({ value });
		axios
		.post("/api/items",  value )
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
	};

	return (
		<div className={styles.container}>
			<div className={styles.form_container}>
				<form action="/submitted" id="waitlist" onSubmit={getQueneNumber}>
					<label htmlFor="name">Name:</label>
					<br />
					<input type="text" id="name" name="name" required></input>
					<br />
					<label htmlFor="number">Phone Number:</label>
					<br />
					<input type="tel" id="name" name="phone" required />
					<br />
					<label htmlFor="number">Number of People:</label>
					<br />
					<input
						type="number"
						min="1"
						id="name"
						name="numberofpeople"
						required
					/>
					<br />
					<button className={styles.button} type="submit">
						Add to Queue
					</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
