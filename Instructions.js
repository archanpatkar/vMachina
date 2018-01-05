class Instructions
{
    constructor(inst)
    {
        this.instructions = inst;
        this.ip = 0;
    }

    *[Symbol.iterator]()
    {
        while(this.ip < this.instructions.length)
        {
            yield this.instructions[this.ip];
            this.ip++;
        }
    }

    insert(command)
    {
        this.ip++;
        this.instructions.splice(this.ip,0,command);
    }

}

module.exports = Instructions