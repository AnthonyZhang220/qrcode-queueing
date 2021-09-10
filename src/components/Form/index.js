import React, { useCallback } from "react";
import bgvideo from "../../media/bgvideo.mp4";
import logo from "../../image/laoma-logo3.png";
import getQueueNumber from "./getQueneNumber";
import { addNewQueue, showQueue } from '../../server/main'
import styles from "./index.module.css";

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const customer = new FormData(e.target);
        const value = Object.fromEntries(customer.entries());

        addNewQueue({value});
        showQueue();
        
    }

	return (
		<div className={styles.container}>
            <div className={styles.logo}>
				<img src={logo} alt="LaoMa Logo" />
            </div>
			<div className={styles.form_container}>
            <button className={styles.test} onClick={showQueue}> GET</button>
				<form action='/#' method='post' id='waitlist'
					onSubmit={handleSubmit}
				>
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
					<button className={styles.button} type="submit">Add to Queue</button>
				</form>
			</div>
			<video
				className={styles.bgvideo}
				src={bgvideo}
				autoPlay
				loop
				muted
				playsInline
				type="video/mp4"
			/>
		</div>

	);
}

export default Form;
