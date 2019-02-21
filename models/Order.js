var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Order Model
 * ==========
 */
var Product = new keystone.List('Order');

Order.add({
	customer:{type : Types.Relationship , ref'User' , many : false , required : true , initial : true},
	products : {type : Types.Relationship,ref:'Products'}
});

Order.defaultColumns = 'name, email, isAdmin';
Order.register();
