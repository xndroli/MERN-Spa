import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';

const Products = () => {
	return (
		<div className="container">
			<CategoryMenu />
			<ProductList />
			<Cart />
		</div>
	);
};

export default Products;
