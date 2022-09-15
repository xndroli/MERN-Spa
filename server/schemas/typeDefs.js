const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Category {
		_id: ID
		name: String
	}

	type Product {
		_id: ID
		name: String
		description: String
		image: String
		quantity: Int
		price: Float
		category: Category
	}

	type Service {
		_id: ID
		name: String
		description: String
		image: String
		quantity: Int
		price: Float
		category: Category
	}

	type Order {
		_id: ID
		purchaseDate: String
		products: [Product]
		services: [Service]
	}

	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		orders: [Order]
	}

	type Checkout {
		session: ID
	}

	type Auth {
		token: ID
		user: User
	}

	type Query {
		categories: [Category]
		products(category: ID, name: String): [Product]
		product(_id: ID!): Product
		services(category: ID, name: String): [Service]
		service(_id: ID!): Service
		user: User
		order(_id: ID!): Order
		checkout(products: [ID]!): Checkout
	}

	type Mutation {
		addUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
		): Auth
		addOrder(products: [ID]!, services: [ID]!): Order
		updateUser(
			firstName: String
			lastName: String
			email: String
			password: String
		): User
		updateProduct(_id: ID!, quantity: Int!): Product
		updateService(_id: ID!, quantity: Int!): Service
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
