import React from 'react';

// import Contact from '../../components/Contact'
import './style.css';

function Jumbotron() {
	return (
		<div className="jumbotron">
			<div className="jumbotron-cta">
				<h2>Welcome to the MERN Spa!</h2>
				<p>Have a look around to see what we're about</p>
			</div>
			<div className="jumbotron-form">{/* <Contact /> */}</div>
		</div>
	);
}

export default Jumbotron;
