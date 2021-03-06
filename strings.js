// var str = "HELLO";

// console.log(str.length);
// console.log(str[4]); O

// console.log(str.toLocaleLowerCase());

// string = group of characters

// 01234 = 5;

// last index will be also length-1

//  hElLo =  HeLlO

// program

// var oldString = "hElLo";
// var newString = "";

// for (var i = 0; i < oldString.length; i++) {
//   if (oldString[i] == oldString[i].toLocaleLowerCase()) {
//     newString = newString + oldString[i].toLocaleUpperCase();
//   } else if (oldString[i] == oldString[i].toLocaleUpperCase()) {
//     newString = newString + oldString[i].toLocaleLowerCase();
//   }
// }

// console.log(oldString, newString);

// var name = "shailesh"  "hseliahs"

var findStr = "Hello world hello earth";

// world

// console.log(findStr.indexOf("worlds"));

if (findStr.indexOf("shailesh") != -1) {
  console.log("Present");
} else {
  console.log("Not Preset");
}
