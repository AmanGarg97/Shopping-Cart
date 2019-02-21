var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */
var Product = new keystone.List('Product');

Product.add({
	name: { type: Types.Text, required: true, index: true , initial:true },
    price: { type: Types.Number, initial: true, required: true},
    description: { type: String }
});

Product.defaultColumns = 'name, email, isAdmin';
Product.register();
