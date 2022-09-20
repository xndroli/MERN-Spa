import React from 'react';


import Jumbotron from '../components/Jumbotron';
import Contact from '../components/Contact'
import Auth from '../utils/auth'

const Home = () => {
	
	const loggedIn = Auth.loggedIn()

	return (
	<main>

		<div className='container'>
			<Jumbotron />
		</div>
		<div>
			<h2>Our Philosophy</h2>
			<p>Search through our products and services to learn about the different aspects of the MERN stack.</p>
		</div>
		<div>
			<Contact />
		</div>

	</main>
		)
};

export default Home;
