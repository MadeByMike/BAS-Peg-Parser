/*global describe, it, before*/

var chai = require("chai"),
    fs = require("fs"),
    expect = chai.expect,
    parse = require("../").parse;
    
chai.should();

fs.writeFileSync(__dirname + "/result.json",""); 

function log(result){
  var text = (typeof result === "object") ? JSON.stringify(result, null, 2) : result;
  var err = fs.appendFileSync(__dirname + "/result.json",text + "\n\n");
  if(err) {
    console.log("Error: "+err);
  }
}
describe("Parser", function() {

  /*Some of these tests are less fleshed out as the resulting output is sub optimal and likley to change*/
  
  describe("Rulesets", function() {
    var fixture = fs.readFileSync(__dirname + "/fixtures/rulesets.bas", "utf8");
    var result = parse(fixture);
    
    log("// rulesets.bas:\n");
    log(result);
    
    it("Can parse @page", function() {
      expect(result.ruleset[0].type).equals("page");
    });
    
    it("Can parse @all", function() {
      expect(result.ruleset[1].type).equals("all");
    });
    
    it("Can parse a simple condition", function() {
      expect(result.ruleset[2].type).equals("page");
      expect(result.ruleset[2].conditions[0]).to.deep.equal({
        "test": "status-code",
        "operator": "=",
        "exprpression": {
          "type": "Quantity",
          "value": 200,
          "unit": null
        }
      });
    });
    
    it("Can parse a mutiple complex conditions", function() {
      expect(result.ruleset[3].type).equals("page");
      expect(result.ruleset[3].conditions).to.deep.equal([
        {
          "test": "content-type",
          "operator": "=~",
          "exprpression": {
            "type": "RegEx",
            "value": {
              "pattern": "^text\\/html",
              "modifiers": "i"
            }
          }
        },
        {
          "test": "status-code",
          "operator": "=",
          "exprpression": {
            "type": "Quantity",
            "value": 200,
            "unit": null
          }
        }
      ]);
    });
    
  });
  
  /*Todo: 'Zip up' all selectors into a tidy string rather than nested objects? */
  /* Doing this would loose easy access to some properties  */
  describe("Selectors", function() {
    var fixture = fs.readFileSync(__dirname + "/fixtures/selectors.bas", "utf8");
    var result = parse(fixture);
    
    log("// Selectors:");
    log(result);
    
    it("Can parse different types of selectors", function() {
      expect(result).is.an("object");
    });
    
  });
  
  /*Todo: Not all annotations are returned currently*/
  describe("Annotations", function() {
    var fixture = fs.readFileSync(__dirname + "/fixtures/annotations.bas", "utf8");
    var result = parse(fixture);
    
    log("// Annotations:");
    log(result);
    
    it("Can parse different types of selectors", function() {
      expect(result).is.an("object");
    });
    
  });
  
  describe("Interpolation", function() {
    var fixture = fs.readFileSync(__dirname + "/fixtures/interpolation.bas", "utf8");
    var result = parse(fixture);
    
    log("// Interpolation:");
    log(result);
  
    it("Can parse different types of selectors", function() {
      expect(result).is.an("object");
    });
    
  });
  
  describe("Assertions", function() {
    var fixture = fs.readFileSync(__dirname + "/fixtures/assertions.bas", "utf8");
    var result = parse(fixture);
    
    log("// Assertions:");
    log(result);
  
    it("Can parse different types of assertions", function() {
      expect(result).is.an("object");
    });
    
  });
  
  /*Todo: Still cannot parse 'the spanner'*/
  //describe("Spanner", function() {
  //  var fixture = fs.readFileSync(__dirname + "/fixtures/spanner.bas", "utf8");
  //  var result = parse(fixture);
  //  
  //  log("// Spanner:");
  //  log(result);
  //  
  //  it("Can parse the spanner", function() {
  //    expect(result).is.an("object");
  //  });
  //  
  //});
  
});

