<<<<<<< HEAD
const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
		min: 0.99,
	},
	quantity: {
		type: Number,
		min: 0,
		default: 0,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
});

const Service = mongoose.model('Service', serviceSchema);
=======
const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);
>>>>>>> ad744f3ef6dee323b122a79ef9adbac953614c32

module.exports = Service;
