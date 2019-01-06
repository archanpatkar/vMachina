const Stack = require("./Stack");

class vMachina
{
    constructor(memory = 256)
    {
        this.stack = new Stack();
        this.returnstack = new Stack();
        this.memory = new Array(memory);
        this.ip = 0;
    }

    addOperation(opcode,op)
    {
        vMachina.prototype[opcode] = op;
    }

    execute(opcode,...params)
    {
        return this[opcode](...params);
    }

    run(code)
    {
        this.ip = 0;
        while(this.ip < code.length)
        {
            const ins = code[this.ip]; 
            const [ op , ...params ] = ins;
            let out = this.execute(op,...params);
            if(out === null) break;
            else if(out === true) continue;
            this.ip++;
        }
    }

    push(v)
    {
        this.stack.push(v);
    }

    pop(v)
    {
        this.stack.pop();
    }

    add()
    {
        this.stack.push(this.stack.pop() + this.stack.pop());
    }

    substract()
    {
        this.stack.push(this.stack.pop() - this.stack.pop());
    }

    divide()
    {
        this.stack.push(this.stack.pop() / this.stack.pop());
    }

    multiply()
    {
        this.stack.push(this.stack.pop() * this.stack.pop());
    }

    load()
    {
        this.stack.push(this.memory[this.stack.pop()]);
    }

    store()
    {
        const v = this.stack.pop();
        const add = this.stack.pop();
        this.memory[add] = v; 
    }

    halt()
    {
        return null;
    }

    jump()
    {
        this.ip = this.stack.pop();
        return true;
    }

    jz()
    {
        const add = this.stack.pop();
        const v = this.stack.pop();
        if(v == 0) this.ip = add;
    }

    jnz()
    {
        const add = this.stack.pop();
        const v = this.stack.pop();
        if(v != 0) this.ip = add;
    }

    call()
    {
        let add = this.stack.pop();
        this.returnstack.push(this.ip);
        this.ip = add;
        return true;
    }

    ret()
    {
        this.ip = this.returnstack.pop();
    }

    swap()
    {
        const v1 = this.stack.pop();
        const v2 = this.stack.pop();
        this.stack.push(v1);
        this.stack.push(v2);
    }

    print()
    {
        console.log(this.stack.pop());
    }
}

module.exports = vMachina;