// Task-5:
// Generate a random number between 10 to 20.


function random (min , max){

   let randomNo=Math.random()*(max-min)+min
   return Math.floor(randomNo+1)


}

console.log(random(10,30))