// data structure

// array is collection fo diff data types

var details = ["hello", "world", 1, true];

// console.log(details[3]);

// console.log(details.length);

// push  - adds element to end of an array
details.push(35);

console.log(details);

details.push(75);

console.log(details);

var x = [1, 2, 3, 4];

// var y = [3, 4];

// 4

var y = [];
for (var i = 0; i < x.length; i++) {
  if (x[i] > 2) {
    y.push(x[i]); //[4]
  }
}

console.log(y);

// pop - removes last element of an array

var completeArr = [1, 2, 3];
console.log(completeArr.pop());
console.log(completeArr);

// unshift - adds element to start of an array

var a = [1, 2];
console.log(a.unshift(3));
console.log(a);

//shift - removes start element of an array

var b = [1, 2, 3];
console.log(b.shift());
console.log(b);
