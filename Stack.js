class Stack
{
    constructor()
    {
        this.stk = [];
        this.st = -1;
    }

    push(v)
    {
        this.st++;
        this.stk[this.st] = v;
    }

    pop()
    {
        let top = this.stk[this.st];
        this.st--;
        return top;
    }

    visit(op)
    {
        op(this);
    }
}

module.exports = Stack;