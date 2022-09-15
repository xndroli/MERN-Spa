const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
	purchaseDate: {
		type: Date,
		default: Date.now,
	},
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
	services: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Service',
		},
	],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
