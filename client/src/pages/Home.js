import React from 'react';


import Jumbotron from '../components/Jumbotron';

//import Auth from '../utils/auth'

const Home = () => {
	
	//const loggedIn = Auth.loggedIn()

	return (
	<main>
		<div className='jumbotron'>
			<Jumbotron />
		</div>

		<div className='intro'>
			<h2 className="section-title">Our Philosophy</h2>
			<p>Search through our products and services to learn about the different aspects of the MERN stack.</p>
		</div>

	</main>
		)
};

export default Home;
