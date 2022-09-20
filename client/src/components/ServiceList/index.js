import React, { useEffect } from 'react';
import ServiceItem from '../ServiceItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_SERVICES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_SERVICES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
//import { useStoreReducer } from '../../utils/reducers';

function ServiceList() {
	const [state, dispatch] = useStoreContext();

	const { currentCategory } = state;

	const { loading, data } = useQuery(QUERY_SERVICES);

	useEffect(() => {
		if (data) {
			console.log('data is here', data);
			dispatch({
				type: UPDATE_SERVICES,
				services: data.services,
			});
			data.services.forEach((service) => {
				idbPromise('services', 'put', service);
			});
		}
		else if (!loading) {
			console.log('data', data);
			idbPromise('services', 'get').then((services) => {
				dispatch({
					type: UPDATE_SERVICES,
					services: services,
				});
			});
		}
	}, [data, loading, dispatch]);

	function filterServices() {
		if (!currentCategory) {
			return state.services;
		}

		return state.services.filter(
			(service) => service.category._id === currentCategory
		);
	}

	// function renderServices(servicesArr) {
	// 	if(!servicesArr){
	// 		return <h2>No servicesArr</h2>
	// 	}
	// 	filterServices(servicesArr).map(service => {
	// 		if(!service){
	// 			return <h2>No services in serviceArr</h2>
	// 		} else {
	// 			return <ServiceItem
	// 			key={service._id}
	// 			_id={service._id}
	// 			image={service.image}
	// 			name={service.name}
	// 			price={service.price}
	// 			quantity={service.quantity}
	// 			/>
	// 		}
	// 	})
	// }

	return (
		<div className="my-2">
			<h2>Our services:</h2>
			{state.services ? (
				<div className="flex-row">
					{filterServices().map((service) => (
						<ServiceItem
							key={service._id}
							_id={service._id}
							image={service.image}
							name={service.name}
							price={service.price}
							quantity={service.quantity}
						/>
					))}
				</div>
			) : (
				<h3>You haven't added any services yet!</h3>
			)}
			{loading ? <img src={spinner} alt="loading" /> : null}
		</div>
	);
}

export default ServiceList;
