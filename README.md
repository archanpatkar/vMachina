# vMachina
A Stack Virtual Machine written in Javascript

### Operations

| Operation 	| Operands 	|                                                   Behaviour                                                  	|
|:---------:	|:--------:	|:------------------------------------------------------------------------------------------------------------:	|
|    push   	|     -    	| Pushes a Value on the Stack                                                                                  	|
|    pop    	|     -    	| Pops a Value from the Stack                                                                                  	|
|    add    	|     2    	| Pops 2 Values from Stack adds them then pushes the sum                                                       	|
| substract 	|     2    	| Pops 2 Values from Stack substracts them then pushes the diff                                                	|
|   divide  	|     2    	| Pops 2 Values from Stack divides them then pushes the quotient                                               	|
|  multiply 	|     2    	| Pops 2 Values from Stack multiplies them then pushes the product                                             	|
|    load   	|     1    	| Pops a Value from the Stack goes to that location in the memory and pushes its value                         	|
|   store   	|     2    	| Pops 2 Values (value,location) from Stack goes to that location in the memory and stores the value           	|
|    jump   	|     1    	| Pops a Value from the Stack and jumps to the location                                                        	|
|     jz    	|     2    	| Pops 2 Values (location,value) from Stack goes to that location if value is 0                                	|
|    jnz    	|     2    	| Pops 2 Values (location,value) from Stack goes to that location if value is not 0                            	|
|    call   	|     1    	| Pops a Value from the Stack store the current location in the Pointer Stack and jumps to the location popped 	|
|    ret    	|     -    	| Pops a Value from the Pointer Stack and returns/jumps to that location                                       	|
|    swap   	|     2    	| Pops 2 Values and pushing them in the reverse order which swaps them                                         	|
|   print   	|     1    	| Pops a Values from the Stack and prints it                                                                   	|
|    halt   	|     -    	| Halts the machine                                                                                            	|
