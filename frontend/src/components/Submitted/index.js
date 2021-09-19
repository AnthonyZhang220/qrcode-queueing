import React, { Component } from "react";
import styles from "./index.module.css";
import axios from "axios";

class Submitted extends Component {
	state = {
		queue: "",
		name: "",
		numberofpeople: "",
	};

	componentDidMount() {
		axios.get("/api/items").then((res) => {
			this.setState({ queue: `${res.data.length}` });
			this.setState({ name: `${res.data[res.data.length - 1].name}` });
			this.setState({ numberofpeople: `${res.data[res.data.length - 1].numberofpeople}` });
		});
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.result_background}>
					<div className={styles.result}>
						<h3>Your Queue Number is: </h3>
						<h1>{this.state.queue}</h1>
						<h3>Guest: {this.state.name}</h3>
						<h3>Table for: {this.state.numberofpeople} </h3>
						<p>Please DO NOT refresh this page.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Submitted;
