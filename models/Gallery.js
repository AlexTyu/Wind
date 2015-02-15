var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	description: { type: Types.Text, label: "Description", required: true, initial: true },
	image: { type: Types.LocalFile, dest: '../../Projects/Wind/public/files', prefix: '/files/', 
		format: function(item, file){
			return '<img src="/files/'+file.filename+'" style="max-width: 300px">'
		} 
	}
});

Gallery.register();
