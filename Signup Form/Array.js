// let arr=new Array("a","b","c");
// console.log(arr);
// arr.push(1);
// console.log(arr);

// let arr= new Array(4);

// console.log(arr);

// Stirng 

// let str= "apple apple apple";
// str= str.replace(/apple/g, "mongo");
// console.log(str);

// Set in JS


/*Set is a collection of unique values. It can hold any type of values, whether primitive or object references. The main features of a Set include:

1. Uniqueness: A Set can only contain unique values. If you try to add a duplicate value, it will be ignored.
let arr= [1, 2, 3, 4, 5, 5, 5];

let set = new Set(arr);
console.log(set);

let arr2 = [...set];
console.log(arr2);

let str= "sonu sonu sonu";
let set2 = new Set(str);
console.log(set2);

let str2 = Array.from(set2).join("");
console.log(str2);

let arr3 = Array.from(set);
console.log(arr3);

for(let i of set){
    console.log(i);
}

console.log(set.has(3));
console.log(set.delete(3));
console.log(set.has(3));
console.log(set.size);
console.log(set.clear());
console.log(set.size);

*/

// Map in JS

/*Map is a collection of key-value pairs where each key is unique. It allows you to store and retrieve values based on their associated keys. The main features of a Map include:
1. Key-Value Pairs: A Map stores data in the form of key-value pairs, where each key is unique and maps to a specific value.
2. Ordered: The order of key-value pairs in a Map is maintained based on the order of insertion.
3. Flexible Keys: In a Map, keys can be of any type, including objects, functions, and primitive values.
4. Size Property: A Map has a size property that indicates the number of key-value pairs it contains.
5. Iteration: You can iterate over the key-value pairs in a Map using methods like forEach, keys, values, and entries.
6. Methods: A Map provides various methods for adding, retrieving, and manipulating key-value pairs, such as set, get, has, delete, and clear.

 */


// let map = new Map();

// map.set("name", "sonu");
// map.set("age", 23);

// console.log(map)


// console.log(map.get("age")); // get the value using key not value
// console.log("Has mehtod", map.has("name"));

// console.log(map.size)

// console.log("Delete method ", map.delete("name"))

// console.log(map)




let a= [1,2,3,4,,6,6]

