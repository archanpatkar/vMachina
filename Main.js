const vMachina = require("./Machine");

const m = new vMachina();

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