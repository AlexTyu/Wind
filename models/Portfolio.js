var keystone = require('keystone'),
	Types = keystone.Field.Types;


var Portfolio = new keystone.List('portfolio', {
	autokey: { from: 'name', path: 'key', unique: true }
});
/* Не трогай сука */
Portfolio.add({
	name: { type: String, required: true }, 
	
	
	cover: { type: Types.LocalFile, dest: '../../Projects/Wind/public/files', prefix: '/files/', 	
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 300px">'}}, 
	
	videocover: { type: Types.LocalFile, dest: '../../Projects/Wind/public/files', prefix: '/files/', 
	format: function(item, file){return '<source src="/files/'+file.filename+'" type="video/mp4>'}}, 
	
	URL: { type: Types.Url, wysiwyg: false, label: "URL", required: false, initial: false},
	
	Short: { type: Types.Html, wysiwyg: false, label: "Short Description", required: true, initial: true },
	
	Objective: { type: Types.Html, wysiwyg: true, label: "Description", required: false, initial: false },
	
	Description: { type: Types.Html, wysiwyg: true, label: "Description23", required: false, initial: false },
	
	thumbnail: { type: Types.LocalFile, dest: '../../Projects/Wind/public/files', prefix: '/files/', 
	format: function(item, file){return '<img src="/files/'+file.filename+'" style="max-width: 300px">'}}, 
	
	


});

Portfolio.register();