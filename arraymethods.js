var s = [1, 2, 3, 4, 5];

// data type  is object

// join method is use to convert array to string

var stringResult = s.join();

console.log(typeof s);
console.log(typeof stringResult);
console.log(stringResult);

var str = "hello";

// split method is use to convert string to array

console.log(str.split(""));

var arr = ["apple", "banana", "orange", "grapes"];

var ascOrder = arr.sort(); //asc            ["apple", "banana", "grapes", "orange"]

console.log(ascOrder.reverse()); //["orange", "grapes", "banana", "apple"]

// concat method is use to combine two arrays

var firstarry = [1, 2];
var secodnarry = [3, 4];
console.log(firstarry.concat(secodnarry)); //[1,2,3,4]

// splice method is use to add or remove elements from an array

var spliceArr = ["apple", "banana", "orange", "grapes"];
spliceArr.splice(3, 0, "lemon");
console.log(spliceArr);
