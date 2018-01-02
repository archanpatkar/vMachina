var Stack = require("./Stack")
var Instructions = require("./Instructions");

class vMachina
{
    constructor(operations,instructions)
    {
        this.stack = Stack();
        this.instructions = Instructions(instructions);
        this.operations = operations;
    }

    execute()
    {

    }

}