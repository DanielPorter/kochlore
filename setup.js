db._dropDatabase("kochlore");
db._createDatabase("kochlore");

db._useDatabase("kochlore");

var graph_module =  require("org/arangodb/general-graph");
var graph = graph_module._create("KochNetwork");
graph._addVertexCollection("Institutions");
graph._addVertexCollection("People");
graph._extendEdgeDefinitions(graph_module._relation("Payment", ["People", "Institutions"], ["People", "Institutions"]));



