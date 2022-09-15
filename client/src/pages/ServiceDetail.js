import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
	REMOVE_FROM_CART,
	UPDATE_CART_QUANTITY,
	ADD_TO_CART,
	UPDATE_SERVICES,
} from '../utils/actions';
import { QUERY_SERVICES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function ServiceDetail() {
	const [state, dispatch] = useStoreContext();
	const { id } = useParams();

	const [currentService, setCurrentService] = useState({});

	const { loading, data } = useQuery(QUERY_SERVICES);

	const { services, cart } = state;

	useEffect(() => {
		// already in global store
		if (services.length) {
			setCurrentService(services.find((service) => service._id === id));
		}
		// retrieved from server
		else if (data) {
			dispatch({
				type: UPDATE_SERVICES,
				services: data.services,
			});

			data.services.forEach((service) => {
				idbPromise('services', 'put', service);
			});
		}
		// get cache from idb
		else if (!loading) {
			idbPromise('services', 'get').then((indexedServices) => {
				dispatch({
					type: UPDATE_SERVICES,
					services: indexedServices,
				});
			});
		}
	}, [services, data, loading, dispatch, id]);

	const addToCart = () => {
		const itemInCart = cart.find((cartItem) => cartItem._id === id);
		if (itemInCart) {
			dispatch({
				type: UPDATE_CART_QUANTITY,
				_id: id,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
			idbPromise('cart', 'put', {
				...itemInCart,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				service: { ...currentService, purchaseQuantity: 1 },
			});
			idbPromise('cart', 'put', { ...currentService, purchaseQuantity: 1 });
		}
	};

	const removeFromCart = () => {
		dispatch({
			type: REMOVE_FROM_CART,
			_id: currentService._id,
		});

		idbPromise('cart', 'delete', { ...currentService });
	};

	return (
		<>
			{currentService && cart ? (
				<div className="container my-1">
					<Link to="/">← Back to Services</Link>

					<h2>{currentService.name}</h2>

					<p>{currentService.description}</p>

					<p>
						<strong>Price:</strong>${currentService.price}{' '}
						<button onClick={addToCart}>Add to Cart</button>
						<button
							disabled={!cart.find((p) => p._id === currentService._id)}
							onClick={removeFromCart}
						>
							Remove from Cart
						</button>
					</p>

					<img
						src={`/images/${currentService.image}`}
						alt={currentService.name}
					/>
				</div>
			) : null}
			{loading ? <img src={spinner} alt="loading" /> : null}
			<Cart />
		</>
	);
}

export default ServiceDetail;
