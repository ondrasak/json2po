/*
 * grunt-json2po
 * https://github.com/warmrobot/json2po
 *
 * Copyright (c) 2014 Igor Frolov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	var path = require( 'path' ),
		util = require( 'util' );

	grunt.registerMultiTask( 'json2po', 'Convert i18n JSON files to PO format', function () {
		var options = this.options({
			format: 'module', // format of translated js source file
			original: 'en', // original lang
			path: 'LC_MESSAGES', // subfolder for PO file
			filename: 'messages.po' // PO filename
		});

		// Iterate over all specified file groups.
		this.files.forEach( function( f ) {
			// Create array of content of src files
			var src = f.src.filter(function ( filepath ) {
				// Warn on and remove invalid source files (if nonull was set).
				if ( !grunt.file.exists( filepath ) ) {
					grunt.log.warn( 'Source file "' + filepath + '" not found.' );
					return false;
				} else {
					return true;
				}
			}).map( function ( filepath ) {
				// Read file source.
				return options.format === 'module' ? require( path.resolve( filepath ) ) : grunt.file.readJSON( path.resolve( filepath ) );
			});

			// Convert each file
			for ( var i = 0, ii = src.length; i < ii; i++ ) {
				var fileContent = src[ i ],
					langs;

				// Module format has the the only property, which value is langs object
				if ( options.format === 'module' ) {
					var moduleName = Object.keys( fileContent );
					langs = fileContent[ moduleName[ 0 ] ];
				} else {
					langs = fileContent;
				}

				for ( var langName in langs ) {
					var messages = langs[ langName ],
						poString = '#\nmsgid ""\nmsgstr ""\n"Content-Type: text/plain; charset=UTF-8\\n"';

					for ( var id in messages ) {
						var message = messages[ id ];

						poString += '\n\nmsgid "' + id  + '"' + // reference
							'\nmsgstr "' + message + '"'; // translation
					}

					// Save to file
					var fullPath = f.dest + '/' + langName + '/' + options.path + '/' + options.filename;
					grunt.file.write( fullPath, poString );
					grunt.log.writeln( 'File "' + fullPath + '" created.' );
				}
			}
		});
	});
};
