console.log("------------------Task-1-------------------")
// Write a function to convert temperature from Celsius to Fahrenheit.
// (23°C × 9/5) + 32 = 73.4°F


function temperature(celsius) {

    let far = (celsius * (9 / 5)) + 32;
    return celsius + " d = " + far.toFixed(2) + " F";

}

let result = temperature(25);
console.log(result);