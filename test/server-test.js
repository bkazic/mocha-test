var assert = require("assert");
var request = require("supertest");

// test if NODE_ENV is set to "test"
describe('Testing NODE_ENV', function () {
	// check node env
	console.log("NODE_ENV is: " + process.env.NODE_ENV);	
	
    it('should be set to "test"', function () {
        assert.equal(process.env.NODE_ENV, "test")
    });
})

describe('Server test', function () {
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
