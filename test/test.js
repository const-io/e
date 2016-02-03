'use strict';

// MODULES //

var tape = require( 'tape' );
var e = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( typeof e === 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 2.718281828459045', function test( t ) {
	t.equal( e, 2.718281828459045, 'equals 2.718281828459045' );
	t.end();
});
