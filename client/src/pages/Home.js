import React from 'react';
import ProductList from '../components/ProductList'
import ServiceList from '../components/ServiceList';
import Jumbotron from '../components/Jumbotron';
import Auth from '../utils/auth'

const Home = () => {
	
	const loggedIn = Auth.loggedIn()

	return (
	<main>
		<Jumbotron />
		<div className='container'>

			<div>
				<ProductList/>                                                                                            
			</div>

			<div>
				<ServiceList/>
			</div>
		</div>
	</main>
		)
};

export default Home;
