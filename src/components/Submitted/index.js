import React from "react";
import { showQueue } from "../../server/main";
import styles from "./index.module.css";

const Submitted = () => {
	return (
		<div className={styles.container}>
			<div className={styles.result_background}>
				<div className={styles.result}>
					<h4>Your Queue Number is: </h4>
          <h1>{showQueue() + 1}</h1>
					<p>Please do not refresh this page.</p>
				</div>
			</div>
		</div>
	);
};

export default Submitted;
