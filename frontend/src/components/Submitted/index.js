import React, { Component } from "react";
import styles from "./index.module.css";
import axios from "axios";

class Submitted extends Component {
	state = {
		queue: '',
	};

	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			this.setState({ queue: `${res.data.length}` });
		});
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.result_background}>
					<div className={styles.result}>
						<h4>Your Queue Number is: </h4>
						<h1>{this.state.queue}</h1>
						<p>Please do not refresh this page.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Submitted;
