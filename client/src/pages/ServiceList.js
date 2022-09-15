import React from 'react';
import ServiceList from '../components/ServiceList';
import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';

const ServiceList = () => {
	return (
		<div className="container">
			<CategoryMenu />
			<ServiceList />
			<Cart />
		</div>
	);
};

export default ServiceList;
