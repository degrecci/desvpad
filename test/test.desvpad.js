'use strict';

var exec = require( 'child_process' ).exec;
var pkg = require( '../package.json' );
var desvpad = './desvpad.js';
require( 'should' );

describe( 'Desvpad', function() {
  it( 'Should return version of desvpad', function( done ) {
    exec( desvpad + ' --version', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.replace( '\n', '' ).should.be.equal( pkg.version );
      done();
    });
  });
});
