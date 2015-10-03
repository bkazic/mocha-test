var assert = require("assert");
var request = require("supertest");
describe('Server test', function () {
	
	// check node env
	console.log("NODE_ENV is: " + process.env.NODE_ENV);	
	
	// run server
	beforeEach(function () {
	  server = require('../server')();
	});
    
    // test server
	it('responds to /', function testSlash(done) {
	  request(server)
	    .get('/')
	    .expect(200, done);
	});
});