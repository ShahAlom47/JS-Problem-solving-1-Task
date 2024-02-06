
// Task-4:
// Write a function to find the longest word in a given string.


// 

// let input = "I am learning Programming to become a programmer";
// let stringToArray = input.split(" ");


// function findItem(item) {

//     const wordlnth = [];

//     for (let loopAry of item) {

//         wordlnth.push(loopAry.length)

//     }
//     let maxV = Math.max(...wordlnth);

//     for (let aa of item) {

//         let lnth = aa.length
//         if (lnth === maxV) {

//             return "'" + aa + "'" + "  is the longest word, length is " + maxV;
//         }

//     }

// }
// let result = findItem(stringToArray)
// console.log(result)



// --------------------2nd and  mathod -------------------

// sample-output: Programming
function findItem (items){

    let strToAry = items.split(" ");
    let maxwidth = 0;
    let longestword ='';
    
    // console.log(strToAry);
    
    for (let loop of strToAry){
        let lanth = loop.length
    if( maxwidth< lanth){
        maxwidth=lanth;
        longestword=loop;
    }
    
    }
    
    return longestword;
    }
    
    let input2 = "I am learning Programming to become a programmerrrrr";
    
    let result2 =findItem(input2);
    console.log(result2);