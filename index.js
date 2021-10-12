// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log(a.map(x => x * 2));

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log("Case 1 : "+colors.join(" "));
console.log("Case 2 : "+colors.join(" + "));
console.log("Case 3 : "+colors);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a, b) => b - a))

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var foo = a.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
console.log(Object.keys(foo).reduce((a, b) => foo[a] > foo[b] ? a : b))
//console.log(foo) {2: 2, 3: 4, 4: 1, 9: 1, a: 5}

// console.log(Math.max(...Object.values(foo)))
// console.log(a.reduce((prev, curr) =>prev + curr )) 