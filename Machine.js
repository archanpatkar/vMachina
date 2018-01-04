var Stack = require("./Stack")
var Instructions = require("./Instructions");

class vMachina
{
    constructor(operations,instructions)
    {
        this.stack = new Stack();
        // this.instructions = new Instructions(instructions); IN PROGRESS
        this.instructions = instructions;
        this.operations = operations;
    }

    execute()
    {
        for(let i = 0; i < this.instructions.length; i++)
        {
            var ins = this.instructions[i]
            if(ins.startsWith("push"))
            {
                var val = ins.substring(ins.indexOf('-')+1);
                this.stack.push(val);
            }
            else
            {
                if(ins.startsWith("print"))
                {
                    console.log("--|Stack|--")
                    for(let i = this.stack.st; i >= 0 ; i--)
                    {
                        console.log("----")
                        console.log(this.stack.stk[i])
                        console.log("----")
                    }
                }
                else
                {
                    this.stack.visit(this.operations[ins],this.instructions);
                }
            }
        }
    }

}

module.exports = vMachina;