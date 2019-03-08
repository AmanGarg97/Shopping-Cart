var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

//Common Middleware
keystone.pre('routes' , middleware.initLocals);
keystone.pre('render' , middleware.flashMessages);

var routes = {
    views : importRoutes('./views')
};

exports = module.exports = function(app){

    app.get('/' , routes.views.index);
    app.get('/products' , routes.views.products);
    app.get('/myorders' , routes.views.myorders);
};