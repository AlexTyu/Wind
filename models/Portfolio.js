var keystone = require('keystone'),
	Types = keystone.Field.Types;


var Portfolio = new keystone.List('portfolio', {
	autokey: { from: 'name', path: 'key', unique: true }
});
/* Не трогай сука */
Portfolio.add({
	name: { type: String, required: true }, 
	
	category: { type: Types.Select, options: 'Advertising, App, Branding, Product Design, Web' },
	
	cover: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	videocover: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 
	format: function(item, file){return '<source src="/files/'+file.filename+'" type="video/mp4>'}}, 
	
	URL: { type: Types.Url, wysiwyg: false, label: "URL", required: false, initial: false},
	
	thumbnail: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 800px">'}}, 
	
	Short: { type: Types.Html, wysiwyg: false, label: "Short Description", required: true, initial: true },
	
	Objective: { type: Types.Html, wysiwyg: false, label: "Objective", required: false, initial: false },
	
	Solution: { type: Types.Html, wysiwyg: false, label: "Solution", required: false, initial: false },
	
	
	
	
	
	image1: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image1description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },
	
	image2: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image2description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },
	
	image3: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image3description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },
	
	image4: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image4description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },

	image5: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image1description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },
	
	image5: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image1description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },

	image6: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image6description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },
	
	image7: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image7description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },

	image8: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image8description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },
	
	image9: { type: Types.LocalFile, dest: '/home/www/AngarJS/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 2000px">'}}, 
	
	image9description: { type: Types.Html, wysiwyg: false, label: "Image 1 Description", required: false, initial: false },

	


	
		
	


});

Portfolio.register();