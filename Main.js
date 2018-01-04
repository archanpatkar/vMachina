var Parser = require("./Parser");

var Operations = require("./Operations");

var vMachina = require("./Machine")

let vm = new vMachina(Operations,Parser.parse(__dirname+"/test.patcode"));

vm.execute();

console.log("Execution Complete!")
console.log("----Execution Stats----");
console.log(vm.stack) 
console.log(vm.instructions) 