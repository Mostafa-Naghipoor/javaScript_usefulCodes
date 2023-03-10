//Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myFunction(a, n){

return a.charAt(n)
}
console.log(myFunction("elimo", 2))



//Write a function that takes a string (a) as argument. Remove the first 3 characters of a list

function myFunction(a) {
    return a.slice(3);
 }



 //Write a function that takes a string (a) as argument. Extract the first half a list
 function extractFirstHalf(a) {
    const halfLength = Math.floor(a.length / 2);
    return a.slice(0, halfLength);
  }