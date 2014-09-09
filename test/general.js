/*global describe, it, before*/

var chai = require("chai"),
    fs = require("fs"),
	expect = chai.expect;
	chai.should();

var parse = require("../").parse;

var fixture =
    fs.readFileSync(__dirname + "/fixtures/accessibility.bas", "utf8");

describe("Parser", function() {

	describe("General", function() {

		it("Can parse an example document", function() {

			var result = parse(fixture);

			result.chains[0].filters.length.should.equal(3);
			result.chains[0].filters.forEach(function(filter) {
				expect(filter["function"]).to.equal("func");
			});

		});
    });
});