// do the below programming in anonymous functions & IIFE

// 1-> print odd number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 14]; //Anonymous functions
let oddnumber = [];
let oddfn = function () {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddnumber.push(arr[i]);
    }
  }
};
oddfn();
console.log("odd number in this array are:-", oddnumber);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// 2-> convert all strings to title caps in a string array
(function () {
  /// using IIFE
  const str = ["guvi", "zen", "class"];
  const str1 = [];
  for (i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    str1.push(str[i]);
  }
  console.log(str1);
})();


/*---------------------------------------------------------------------------------------------------------------------------*/

// 3-> sum of all number in an array

let num=[1,2,3,4,5,5];            // Anonymous functions
let add =0;
let sum=function(){
  for(let i=0;i<num.length;i++){
   
    add = add+num[i];
  }
}

sum();
console.log(add);

/*-----------------------------------------------------------------------------------------------------------------------*/

//d.Return all the prime numbers in an array

//Anonymous:
let prime = function (arr) {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(prime([7, 1, 9, 33]));
/*-------------------------------------------------------------------------------------------------------------------------------*/
( function () {
  var myArray = ['race', 'scooty', 'activa', 'verison8'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})()

//OUTPUT: scooty verison8


/*------------------------------------------------------------------------------------------------------------*/

// arrow function (odd number)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using an arrow function to filter and collect odd numbers
const oddNumbers = [];
numbers.forEach(number => {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
});

console.log(oddNumbers);

/*----------------------------------------------------------------------------------------------------------------*/

// sum of number in a array (arrow functions)
const num1 = [1, 2, 3, 4, 5];


const sum1 = numbers.reduce((a, b) => a + b, 0);

console.log(sum1);




