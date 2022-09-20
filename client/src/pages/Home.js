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
		<Contact />
	</main>
		)
};

export default Home;
