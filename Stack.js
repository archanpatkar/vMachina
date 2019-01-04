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
        this.stk[this.st] = undefined;
        this.st--;
        return top;
    }
}

module.exports = Stack;