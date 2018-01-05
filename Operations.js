var Operations = 
{
    "if":function(stack,machine)
    {
        let ifblock = stack.pop();
        let condition = stack.pop();
        if(condition)
        {
            ifblock = ifblock.trim();
            ifblock = ifblock.replace(/[{}]/g, "");
            ifblock = ifblock.split(";");
            machine.executeThis(ifblock);
        }
    },
    "ifelse":function(stack,machine)
    {
        let elseblock = stack.pop();
        let ifblock = stack.pop();
        let condition = stack.pop();
        if(condition)
        {
            ifblock = ifblock.trim();
            ifblock = ifblock.replace(/[{}]/g, "");
            ifblock = ifblock.split(";");
            machine.executeThis(ifblock);
        }
        else
        {
            elseblock = elseblock.trim();
            elseblock = elseblock.replace(/[{}]/g, "");
            elseblock = elseblock.split(";");
            machine.executeThis(elseblock);
        }
    },
    "repeat":function(times,stack,machine)
    {
        let repeatblock = stack.pop();
        repeatblock = repeatblock.trim();
        repeatblock = repeatblock.replace(/[{}]/g, "");
        repeatblock = repeatblock.split(";");
        let counter = 0;
        while(counter < times)
        {
            machine.executeThis(repeatblock);
            counter++;
        }
    },
    "goto":function(){},
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