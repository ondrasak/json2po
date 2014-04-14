'use strict';

var grunt = require( 'grunt' );

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.json2po = {
	setUp: function ( done ) {
		// setup here if necessary
		done();
	},

	moduleFormatOriginal: function ( test ) {
		test.expect( 1 );
		var actual = grunt.file.read( 'tmp/module/en/LC_MESSAGES/messages.po' );
		var expected = grunt.file.read( 'test/expected/module/en/LC_MESSAGES/messages.po' );
		test.equal( actual, expected, 'Module format. Generated original (English) PO match expected' );
		test.done();
	},

	moduleFormatTranslated: function( test ) {
		test.expect( 1 );
		var actual = grunt.file.read( 'tmp/module/ru/LC_MESSAGES/messages.po' );
		var expected = grunt.file.read( 'test/expected/module/ru/LC_MESSAGES/messages.po' );
		test.equal( actual, expected, 'Module format. Generated translated (Russian) PO match expected' );
		test.done();
	},

	jsonFormatOriginal: function ( test ) {
		test.expect( 1 );
		var actual = grunt.file.read( 'tmp/json/en/LC_MESSAGES/messages.po' );
		var expected = grunt.file.read( 'test/expected/module/en/LC_MESSAGES/messages.po' );
		test.equal( actual, expected, 'JSON format. Generated original (English) PO match expected' );
		test.done();
	},

	jsonFormatTranslated: function( test ) {
		test.expect( 1 );
		var actual = grunt.file.read( 'tmp/json/ru/LC_MESSAGES/messages.po' );
		var expected = grunt.file.read( 'test/expected/module/ru/LC_MESSAGES/messages.po' );
		test.equal( actual, expected, 'JSON format. Generated translated (Russian) PO match expected' );
		test.done();
	},
};
