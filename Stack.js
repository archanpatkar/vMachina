class Stack
{
    constructor()
    {
        this.stk = [];
        this.st = 0;
    }

    push(v)
    {
        this.st++;
        this.stk[st] = v;
    }

    pop()
    {
        let top = this.stk[this.st];
        this.st--;
        return top;
    }
}