// var x=10;
// var x=20;
// console.log(x); // Output: 20
// x =30;
// console.log(x); // Output: 30
// function test(){
//     var y=40;
//     if(true){
//         var y=50;
//         console.log(y); // Output: 50
//     }
//     console.log(y); // Output: 50
// }
// test();

// // Object
// let obj1="john";
// let obj2=obj1;
// obj2="doe";
// console.log(obj1); // Output: john
// console.log(obj2); // Output: doe

// // Comparison
// let a=10;
// let b=10;
// console.log(a==b);

// let obj3={name:"john"};
// let obj4=obj3;
// console.log(obj3==obj4);

//  let arr1=[1,2,3];
//  let arr2=[1,2,3];
//  console.log(arr1==arr2); // Output: false

//  let arr3=arr1;

//  console.log(arr1==arr3); // Output: true

/*
var a;
console.log(a);
a=10;
console.log(a);
var a=20;
console.log(a);

function test(){
    var x=5;
    if(true){
        var x=10;
        var a=30;
        console.log(x);
        console.log(a);
    }
    var a=40;
    var x=50;
    console.log(a);
    console.log(x);
}

test();

*/ ////

//  Let

// console.log(b);
// let b=10;
// console.log(b);
// console.log("---------------------------let---------------------")

// const a=10;
// console.log(a);
//  a=20;
// console.log(a);

// console.log(x);
// var x=10;

// console.log(x)
// const x=10;

/*---------------------

let x;
let y=12;
console.log(y); 

let obj1={
    name:"john",
}
let obj2=obj1;
 obj2.name="sonu";

 console.log(obj1.name);
 console.log("----------")
 console.log(obj2.name)
//   it copy the object  refrence  not real object 


console.log("---------------------")

let obj3={
    name:"hii",
}
let obj4={...obj3};
obj4.name="hello";
console.log(obj3)
console.log(obj4)


*/

/*-------------------------------------------------

function changePrimitive(num){
    num=100;
}
function changeReference(obj){
    obj.name="monu";
}

console.log("Primitive data")
let number=10;
changePrimitive(number);
console.log(number);

console.log("Object data type");

let object={
    name:"Hi, Sonu",
}

changeReference(object);
console.log(object);
--------------------------------*/

// Difference b/w undefined and null

/*  UNDEFINED 

// 1. Automatically assigined by JS  when a variable is declared but not initialized 
// 2. Means 'variable exist but has no value yet'
// 3. It's a type itself: typeof `undefined` is undefined

console.log(typeof undefined);

let x;
console.log(x);

function test(param){
    console.log(param);
}

test();

let obj={
    name:"hiii",
}
console.log(obj.name)
console.log(obj.gage)


*/ /*
//  NULLLLLLLLLLLLLLL---------------------------

// 1. Explicitly assigned by the developer 
// 2. Means  `intentionally no value ` or empty 
// 3. it's an object type (this is actull a bug in JS) : typeof null is 'objec'

console.log(typeof null) // object

let x=null;
console.log(x)

function findUser(id){
    return null;
}
console.log(findUser())

console.log(undefined==null)
console.log(undefined === null)

console.log("================================================");

let user=null

function login(userData){
    user=userData;
}
function logout(){
    user=null;
}
    *************************/ /* /////

console.log(0 / 0);
console.log(Math.sqrt(-3));
console.log(parseInt("435fdsdg45"));
console.log("text" * 5);
console.log("text" + 5);
console.log(undefined + 7);
// ================================

console.log(NaN==NaN)
console.log(NaN===NaN)
console.log("---------------------")
console.log(isNaN(NaN))
console.log(isNaN(undefined))
console.log(isNaN("24dsf"))
console.log(isNaN(23))


*/

/*===============================
console.log("------------------------------------------------");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('hello'));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(123));


console.log("------------------");

function isReallyNaN(value) {
  return value !== value;
}

console.log(isReallyNaN(NaN)) // true
console.log(isReallyNaN(5))  // false

console.log(typeof NaN);

*/ //////////////////////////////

function isReallyNaN(value) {
  return value !== value;
}
// console.log(isReallyNaN(NaN));
// console.log(isReallyNaN(5));

// console.log(typeof(NaN));

if([]){
    console.log("hh")
}

if({}){
    console.log(22)
}

if(0){
    console.log(3333333)
}
if(-3){
    console.log(444444)
}

if(4){
    console.log(55555)
}

if(""){
    console.log(666666666)
}
if("hii"){
    console.log(777777777)
}
if(function(){}){
    console.log(888888888)
}

console.log({});
console.log([]);
console.log(0);
console.log(-3)
console.log(5)
console.log("");
console.log("sdf");
console.log(function(){});
console.log(false)