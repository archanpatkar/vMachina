var Stack = require("./Stack")
var Instructions = require("./Instructions");

class vMachina
{
    constructor(operations,instructions)
    {
        this.stack = new Stack();
        // this.instructions = new Instructions(instructions);
        this.instructions = instructions;
        this.operations = operations;
    }

    execute()
    {
        for(let ins of this.instructions)
        {
            if(ins.startsWith("push"))
            {
                let arr = ins.split("->");
                if(arr[0] == "push")
                {
                    this.stack.push(Number(arr[1]));
                }
            }
            else if(ins.startsWith("print"))
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
                this.stack.visit(this.operations[ins]);
            }
        }
    }

}

module.exports = vMachina;