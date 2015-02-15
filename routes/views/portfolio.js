var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'portfolio';
	
	// Load the galleries by sortOrder
	view.query('portfolios', keystone.list('portfolio').model.find().sort('sortOrder'));
	
	// Render the view
	view.render('portfolio');
	
};
