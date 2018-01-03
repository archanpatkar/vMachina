var fs = require("fs");

function parse(file)
{
    return fs.readFileSync(file).toString("utf8").split("\n");
}

module.exports.parse = parse;