import React from 'react';
import ProductList from '../components/ProductList';
//import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';

const ProdList = () => {
	return (
		<div className="container">
			<ProductList />
			<Cart />
		</div>
	);
};

export default ProdList;
