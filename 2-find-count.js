// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

 const numbers = ["5",6,11,12,98, 5]

let target = 5 ; 

let targetount = 0;


function findItem (item ){
    for( const cc of item){
        if(parseInt(target)===parseInt(cc) )
        targetount++;
    }
// parseint use kora te array ba target a jodi  strin o thake taw seta number baniye condition chakc korte parbe 

return target +" is avilable  "+ targetount + " times";
}

let result = findItem(numbers);

console.log(result);




