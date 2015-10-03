var assert = require("assert");
var request = require("supertest");
describe('Array', function () {
	
	// check node env
	console.log("NODE_ENV is: " + process.env.NODE_ENV);	
	if (process.env.NODE_ENV !== "test") {
		console.log("Ok, this is not test")
	} else {
		console.log("HAEEEYY, THIS IS TEST");
	}
	
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