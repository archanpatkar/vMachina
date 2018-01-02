class Instructions{
    constructor(inst)
    {
        this.instructions = [];
        this.ip = 0;
    }

    *[Symbol.iterator]()
    {
        for(; this.ip < this.instructions.length ; this.ip++)
        {
            yield instruction[this.ip];
        }
    }
}