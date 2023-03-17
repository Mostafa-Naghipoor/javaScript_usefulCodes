//map function 
var numbers = [1,2,3,4,5];
function double (number) {
   return  number * 2

}
const newNumbers = numbers.map(double);
console.log(newNumbers)

/////////////////////////////////////////////////////////////////////

//forEach function
var numbers = [1,2,3,4,5];
let newNumbers=[];
function double(number) {
    return newNumbers.push(number* 2)
}

numbers.forEach(double)
console.log(newNumbers)

////////////////////////////////////////////////////////////////////////////
// filter function
var numbers = [1,2,3,4,5]
const newNumbers = numbers.filter(function(num){
  return num < 3
})
console.log(newNumbers)


///////////////////////////////////////////
// reduce method

var numbers = [1,2,3,4,5]
const newNumbers = numbers.reduce(function(accumulator, currentNumber){
  return accumulator + currentNumber;
})
console.log(newNumbers)
///////////////////////////
// find() method find the first number that meets the condition
var numbers = [1,2,3,4,5];
const newNumber = numbers.find(function(num){
  return num < 3;
})
console.log(newNumber)

/////////////////////////////////////////////////////