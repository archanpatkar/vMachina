var Stack = require("./Stack")
var Instructions = require("./Instructions");

class vMachina
{
    constructor(operations,instructions)
    {
        this.stack = new Stack();
        this.instructions = new Instructions(instructions);
        this.operations = operations;
    }

    executeThis(inst)
    {
        for(let ins of inst)
        {
            if(ins.startsWith("push"))
            {
                var val = ins.substring(ins.indexOf('-')+1);
                this.stack.push(val);
            }
            else
            {
                if(ins.startsWith("print"))
                {
                    console.log("---|Stack|---")
                    for(let i = this.stack.st; i >= 0 ; i--)
                    {
                        console.log("----");
                        console.log(this.stack.stk[i]);
                        console.log("----");
                    }
                }
                else
                {
                    if(ins.startsWith("repeat"))
                    {
                        let times = Number(ins.substring(ins.indexOf('@')+1));
                        this.operations["repeat"](times,this.stack,this);

                    }
                    else
                    {
                        let op = this.operations[ins]
                        if(op !== undefined)
                        {
                            op(this.stack,this);
                        }
                    }
                }
            }
        }
    }

    execute()
    {
        this.executeThis(this.instructions);
    }

}

module.exports = vMachina;