import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
	query getProducts($category: ID) {
		products(category: $category) {
			_id
			name
			description
			price
			quantity
			image
			category {
				_id
			}
		}
	}
`;

export const QUERY_SERVICES = gql`
	query getServices($category: ID) {
		services(category: $category) {
			_id
			name
			description
			price
			quantity
			image
			category {
				_id
			}
		}
	}
`;

export const QUERY_CHECKOUT = gql`
	query getCheckout($products: [ID]!, $services: [ID]!) {
		checkout(products: $products, services: $services) {
			session
		}
	}
`;

export const QUERY_ALL_PRODUCTS = gql`
	{
		products {
			_id
			name
			description
			price
			quantity
			category {
				name
			}
		}
	}
`;

export const QUERY_ALL_SERVICES = gql`
	{
		services {
			_id
			name
			description
			price
			quantity
			category {
				name
			}
		}
	}
`;

export const QUERY_CATEGORIES = gql`
	{
		categories {
			_id
			name
		}
	}
`;

export const QUERY_USER = gql`
	{
		user {
			firstName
			lastName
			orders {
				_id
				purchaseDate
				products {
					_id
					name
					description
					price
					quantity
					image
				}
				services {
					_id
					name
					description
					price
					quantity
					image
				}
			}
		}
	}
`;
