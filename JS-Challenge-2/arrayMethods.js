//Write a JS program to find the smallest number in the array.
let arr = [12, 6, 10, 2, 45, 100];
function smallest(arr){
    const min = arr.reduce((a, b) => Math.min(a, b));
    return min
}
console.log(smallest(arr));

//Write a JS program to find the least frequent item of an array.
let arr1=[3, 'c', 'c', 'a', 2, 3, 'c', 3,'c', 2, 4, 9, 9];
function leastFrequent(arr) {
    let count = arr.map((it) => (it = arr.filter((x) => x === it).length));
    let least = count.indexOf(Math.min(...count));
    return arr[least];
}
console.log(leastFrequent(arr1));

//Write a JS program to remove duplicates in an array.
let arr2 = [7, 9, 1, 'a', 'a', 'f', 9 , 4,2, 'd', 'd']
function removeDuplicate(arr) {
    let count = arr.map((c) => (c = arr.filter((x) => x === c).length));
    let res = [];
    count.map((c, index) => {
      if (c === 1) res.push(arr[index]);
    });
    return res;
  }
  console.log(removeDuplicate(arr2));

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

let concatdata = [["The", "little", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]]

function concat(arr) {
  const result = arr.map((item) => item.reduce((acc, item) => `${acc} ${item}`));
  console.log(result);
  return result
}
console.log(concat(concatdata));