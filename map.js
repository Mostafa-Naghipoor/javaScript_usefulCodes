// //map function 
// var numbers = [1,2,3,4,5];
// function double (number) {
//    return  number * 2

// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers)



//forEach function
var numbers = [1,2,3,4,5];
let newNumbers=[];
function double(number) {
    return newNumbers.push(number* 2)
}

numbers.forEach(double)
console.log(newNumbers)
