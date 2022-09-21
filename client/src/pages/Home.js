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
					Search through our products and services to learn about the different
					aspects of the MERN stack.
				</p>
			</div>
			<div className="slideshow">
				<h2 className="section-title">Our Services</h2>
				<p></p>
				<Gallery />
			</div>
			<footer className="footer">
				<h2 className="">Brought to you by MERN Spa</h2>
				<Contact />
			</footer>
		</main>
	);
};

export default Home;
