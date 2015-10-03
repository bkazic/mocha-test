var assert = require("assert");
describe('Array', function () {
	
console.log("NODE_ENV is: " + process.env.NODE_ENV);	
	
if (process.env.NODE_ENV !== "test") {
	console.log("Ok, this is not test")
} else {
	console.log("HAEEEYY, THIS IS TEST");
}
	
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});