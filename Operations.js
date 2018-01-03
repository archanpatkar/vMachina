var Operations = 
{
    "add":function(stack)
    {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(n2+n1);
    },
    "sub":function(stack)
    {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(n2-n1);
    },
    "mul":function(stack)
    {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(n2*n1);
    },
    "div":function(stack)
    {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(n2/n1);
    },
    "gt":function(stack)
    {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push((n2 > n1));
    },
    "lt":function(stack)
    {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push((n2 < n1));
    }
};

module.exports = Operations;