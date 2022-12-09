//Write a JS program to find the smallest number in the array.
let arr = [12, 6, 10, 2, 45, 100];
const min = arr.reduce((a, b) => Math.min(a, b));
console.log(min);

//Write a JS program to find the least frequent item of an array.
let arr1=[3, 'c', 'c', 'a', 2, 3, 'c', 3,'c', 2, 4, 9, 9];
//let leastFrequent = arr1.map((c, i) => );

//Write a JS program to remove duplicates in an array.
let arr2 = [7, 9, 1, 'a', 'a', 'f', 9 , 4,2, 'd', 'd']
let unique = arr2.filter((c, i) => arr2.indexOf(c) === i);
console.log(unique);

//Write a JS program to concat arrays.
let data = [["The", "little", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]]

let data1 = data.shift(0).join(' ');
let data2 = data.shift(1).join(' ');
let data3 = data.shift(2).join(' ');
let data4 = data.shift(3).join(' ');

let newData = []
newData.push(data1);
newData.push(data2);
newData.push(data3);
newData.push(data4);

console.log(newData);