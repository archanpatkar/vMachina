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
        for(let ins of this.instructions)
        {
            console.log(ins);
            if(ins.startsWith("push"))
            {
                let arr = ins.split("->");
                if(arr[0] == "push")
                {
                    this.stack.push(arr[1]);
                }
            }
            else
            {
                if(ins.startsWith("print"))
                {
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
                    console.log(this.instructions);
                }
            }
        }
    }

}

module.exports = vMachina;