var Operations = 
{
    "if":function(stack,instructions)
    {
        console.log("in if <----------------------------->");
        console.log("INS -> " + instructions)
        let ifblock = stack.pop();
        console.log(ifblock);
        let condition = stack.pop();
        if(condition)
        {
            ifblock = ifblock.trim();
            ifblock = ifblock.replace(/[{}]/g, "");
            ifblock = ifblock.split(";");
            console.log(ifblock)
            for(let comm of ifblock)
            {
                instructions.push(comm)
            }   
            console.log("INS -> " + instructions)
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