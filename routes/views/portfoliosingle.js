var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'portfiliosingle';
	locals.data = {};

	view.on('init', function(next) {
		
		var q = keystone.list('portfolio').model.findOne({
			key: req.params.slug
		});
		
		q.exec(function(err, result) {
			locals.data.portfolio = result;
			next(err);
		});
		
	});
	
	view.render('portfoliosingle');
	
};
