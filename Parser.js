var fs = require("fs");

function splitString(file)
{
    return fs.readFileSync(file).toString("utf8").split("\n");
}

function tokenize(string)
{
  return string.forEach( (line) => line.split(" "); )
}

console.log(splitString("test.patcode"))

// module.exports.parse = parse;
