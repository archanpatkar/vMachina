var Parser = require("./Parser");

var Operations = require("./Operations");

var vMachina = require("./Machine")

let vm = new vMachina(Operations,Parser.parse(__dirname+"/test.patcode"));

vm.execute();