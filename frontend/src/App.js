import Form from "./components/Form";
import Footer from "./components/Footer";
import Submitted from "./components/Submitted";
import logo from "./image/laoma-logo3.png";
import bgvideo from "./media/bgvideo.mp4";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";

function App() {
	return (
		<>
			<div className={styles.app}>
				<video
					className={styles.bgvideo}
					src={bgvideo}
					autoPlay
					loop
					muted
					playsInline
					type="video/mp4"
				/>
				<div className={styles.logo}>
					<img src={logo} alt="LaoMa Logo" />
				</div>
				<div>
					<Router>
						<Route exact path="/">
							<Form />
						</Route>
						<Route path='/submitted'>
							<Submitted />
						</Route>
					</Router>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
