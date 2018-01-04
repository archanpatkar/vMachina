var Operations = 
{
    "if":function(stack,instructions)
    {
        let ifblock = stack.pop();
        let condition = stack.pop();
        if(condition)
        {
            ifblock = ifblock.trim();
            ifblock = ifblock.replace(/[{}]/g, "");
            ifblock = ifblock.split(";");
            for(let comm of ifblock)
            {
                instructions.push(comm)
            }   
        }
    },
    "ifelse":function(stack,instructions)
    {
        let elseblock = stack.pop();
        let ifblock = stack.pop();
        let condition = stack.pop();
        if(condition)
        {
            ifblock = ifblock.trim();
            ifblock = ifblock.replace(/[{}]/g, "");
            ifblock = ifblock.split(";");
            for(let comm of ifblock)
            {
                instructions.push(comm)
            }   
        }
        else
        {
            elseblock = elseblock.trim();
            elseblock = elseblock.replace(/[{}]/g, "");
            elseblock = elseblock.split(";");
            for(let comm of elseblock)
            {
                instructions.push(comm)
            } 
        }
    },
    "add":function(stack)
    {
        let n1 = Number(stack.pop());
        let n2 = Number(stack.pop());
        stack.push(n2+n1);
    },
    "sub":function(stack)
    {
        let n1 = Number(stack.pop());
        let n2 = Number(stack.pop());
        stack.push(n2-n1);
    },
    "mul":function(stack)
    {
        let n1 = Number(stack.pop());
        let n2 = Number(stack.pop());
        stack.push(n2*n1);
    },
    "div":function(stack)
    {
        let n1 = Number(stack.pop());
        let n2 = Number(stack.pop());
        stack.push(n2/n1);
    },
    "gt":function(stack)
    {
        let n1 = Number(stack.pop());
        let n2 = Number(stack.pop());
        stack.push((n2 > n1));
    },
    "lt":function(stack)
    {
        let n1 = Number(stack.pop());
        let n2 = Number(stack.pop());
        stack.push((n2 < n1));
    }
};

module.exports = Operations;