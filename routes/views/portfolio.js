var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'portfolio';
	
	// Load the galleries by sortOrder
	
	view.on('get', { category: true }, function(next) {
		
		if (req.query.name != undefined){
			var q = keystone.list('portfolio').model.find().where('category',req.query.name).limit(100);
		
			q.exec(function(err, results) {
				res.send(results);
			});
			
		} else {
			var q = keystone.list('portfolio').model.find();
		
			q.exec(function(err, results) {
				res.send(results);
			});
		}
		
		
	
		
		
	});
	
	// Render the view
	view.render('portfolio');
	
};
