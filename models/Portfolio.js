var keystone = require('keystone'),
	Types = keystone.Field.Types;


var Portfolio = new keystone.List('portfolio', {
	autokey: { from: 'name', path: 'key', unique: true }
});
/* Не трогай сука */
Portfolio.add({
	name: { type: String, required: true },
	description: { type: Types.Html, wysiwyg: true, label: "Short Description", required: true, initial: true },
	description: { type: Types.Html, wysiwyg: true, label: "Description", required: true, initial: true },
	description: { type: Types.Html, wysiwyg: true, label: "Description23", required: true, initial: true },
	image: { type: Types.LocalFile, dest: '../../Projects/Wind/public/files', prefix: '/files/', 
		format: function(item, file){
			return '<img src="/files/'+file.filename+'" style="max-width: 300px">'
		} 
	}
});

Portfolio.register();