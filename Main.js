// var Parser = require("./Parser");

// var Operations = require("./Operations");

// var vMachina = require("./Machine")

// let vm = new vMachina(Operations,Parser.parse(__dirname+"/test2.patcode"));

// vm.execute();

// console.log("Execution Complete!");
// console.log("----Execution Stats----");
// console.log(vm.stack);
// console.log(vm.instructions);

const vMachina = require("./NEWVM");

const m = new vMachina();

// m.code`
// push ${10}
// push ${20}
// add
// print
// `

m.run([
    ["push",10],
    ["push",20],
    ["add"],
    ["print"]
]);

console.log("Storing and Loading from memory");
m.run([
    ["push",0],
    ["push",100],
    ["store"],
    ["push",0],
    ["load"],
    ["print"]
]);

console.log("Testing Call");
m.run([
    ["push",10],
    ["push",8],
    ["call"],
    ["push",10],
    ["push",20],
    ["add"],
    ["print"],
    ["halt"],
    ["push",2],
    ["multiply"],
    ["print"],
    ["ret"]
]);