/**
Develop a function called greaterNum which:

 - Accepts two arguments, both of which are numbers.
 - Returns the larger of the two numbers.

 */
function greaterNum (x, y){
    if(x>y){
        return x;
    }
    else(x<y);{         // return x > y? x: y; This also works fine.
        return y;
    }
} 

// Sample usage - do not modify
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));
