class Instructions{
    constructor(inst)
    {
        this.instructions = [];
        this.ip = 0;
    }

    *[Symbol.iterator]()
    {
        while(this.ip < this.instructions.length)
        {
            yield instruction[this.ip];
            this.ip++;
        }
    }
}

module.exports = Instructions