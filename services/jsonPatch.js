const jsonpatch = require("fast-json-patch");

var document = { firstName: "Albert", contactDetails: { phoneNumbers: [] } };
var patch = [
  { op: "replace", path: "/firstName", value: "Joachim" },
  { op: "add", path: "/lastName", value: "Wester" },
  {
    op: "add",
    path: "/contactDetails/phoneNumbers/0",
    value: { number: "555-123" }
  }
];
document = jsonpatch.applyPatch(document, patch).newDocument;
var jsonPatch ={
    patchJson:function(req,res) {
        res.send(document);
    }
};
module.exports = jsonPatch;