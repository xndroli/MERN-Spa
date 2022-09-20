const db = require('./connection');
const { User, Product, Service, Category } = require('../models');

db.once('open', async () => {
	await Category.deleteMany();

	const categories = await Category.insertMany([
		{ name: 'Product' },
		{ name: 'Service' },
	]);

	console.log('categories seeded');

	await Service.deleteMany();

	const services = await Service.insertMany([
		{
			name: 'Mongoose Massage',
			description:
				'A 60 minute massage where you get to learn all about MongoDB',
			image: 'mongoosemassage.jpg',
			category: categories[1]._id,
			price: 20000.0,
			quantity: 500,
		},
		{
			name: 'Express Eyebrow Wax',
			description: 'Efficient and effective eyebrow wax',
			image: 'expresseyebrowwax.jpg',
			category: categories[1]._id,
			price: 12000.0,
			quantity: 500,
		},
		{
			name: 'React Rejuvenating Facial',
			category: categories[1]._id,
			description: 'A facial to relax and rejuvenate',
			image: 'reactfacial.jpg',
			price: 10000.0,
			quantity: 500,
		},
		{
			name: 'Node Nails- Manicure',
			category: categories[1]._id,
			description:
				'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
			image: 'manicure.jpg',
			price: 9000.0,
			quantity: 500,
		},
		{
			name: 'Node Nails- Pedicure',
			category: categories[1]._id,
			description:
				'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
			image: 'pedicure.jpeg',
			price: 9000.0,
			quantity: 500,
		},
	]);

	await Product.deleteMany();

	const products = await Product.insertMany([
		{
			name: 'Cleanser',
			description: 'Wash your face',
			image: 'cookie-tin.jpg',
			category: categories[0]._id,
			price: 2.99,
			quantity: 500,
		},
		{
			name: 'Toner',
			description: 'Who really knows what a toner does?',
			image: 'canned-coffee.jpg',
			category: categories[0]._id,
			price: 1.99,
			quantity: 500,
		},
		{
			name: 'Moisturizer',
			category: categories[0]._id,
			description: 'Because your face is dry',
			image: 'toilet-paper.jpg',
			price: 7.99,
			quantity: 20,
		},
		{
			name: 'Serum',
			category: categories[0]._id,
			description: 'Like a moisturizer, but liquid',
			image: 'soap.jpg',
			price: 3.99,
			quantity: 50,
		},
		{
			name: 'Masks',
			category: categories[0]._id,
			description: "Because we didn't get enough masks in 2020",
			image: 'wooden-spoons.jpg',
			price: 14.99,
			quantity: 100,
		},
		{
			name: 'Fragrance',
			category: categories[0]._id,
			description: 'Who needs to shower?',
			image: 'camera.jpg',
			price: 399.99,
			quantity: 30,
		},
	]);

	console.log('products seeded');

	await User.deleteMany();
	await User.create({
		username: 'PamWash',
		firstName: 'Pamela',
		lastName: 'Washington',
		email: 'pamela@realmail.com',
		password: 'password12345',
		orders: [
			{
				products: [products[0]._id, products[0]._id, products[1]._id],
			},
		],
	});

	await User.create({
		username: 'PamWash2',
		firstName: 'Elijah',
		lastName: 'Holt',
		email: 'eholt@fakemail.com',
		password: 'password12345',
	});

	console.log('users seeded');

	await User.create({
		username: 'PamWash3',
		firstName: 'Pamela',
		lastName: 'Washington',
		email: 'pamela@testmail.com',
		password: 'password12345',
		orders: [
			{
				products: [products[0]._id, products[0]._id, products[1]._id],
				services: [services[0]._id, services[0]._id, services[1]._id],
			},
		],
	});

	await User.create({
		username: 'PamWash4',
		firstName: 'Elijah',
		lastName: 'Holt',
		email: 'eholt@testmail.com',
		password: 'password12345',
	});

	console.log('users seeded');

	process.exit();
});
