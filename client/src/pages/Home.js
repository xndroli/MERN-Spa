import React from 'react';

import Jumbotron from '../components/Jumbotron';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

//import Auth from '../utils/auth'

const Home = () => {
	//const loggedIn = Auth.loggedIn()

	return (
		<main>
			<div className="jumbotron">
				<Jumbotron />
			</div>
			<div className="intro">
				<h2 className="section-title">Our Philosophy</h2>
				<p>
					Our belief is that there's no stack better than the MERN stack, and we have the services to prove it. Check out our services below to get an idea of what we offer. Also remember to view our products to work out the knots in your app.
				</p>
			</div>
			<div className="slideshow">
				<h2 className="section-title">Our Services</h2>

				<Gallery />
			</div>
			<footer className="footer">
				<Contact />
				<div className="footer-title">
				<h4>Brought to you by the good folks at MERN Spa</h4>
				</div>
			</footer>
		</main>
	);
};

export default Home;
