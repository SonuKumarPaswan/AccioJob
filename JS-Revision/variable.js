var x=10;
var x=20;
console.log(x); // Output: 20
x =30;
console.log(x); // Output: 30
function test(){
    var y=40;
    if(true){
        var y=50;
        console.log(y); // Output: 50
    }
    console.log(y); // Output: 50
}
test();

// Object 
let obj1="john";
let obj2=obj1;
obj2="doe";
console.log(obj1); // Output: john
console.log(obj2); // Output: doe


// Comparison
let a=10;
let b=10;
console.log(a==b); 

let obj3={name:"john"};
let obj4=obj3;
console.log(obj3==obj4);

 let arr1=[1,2,3];
 let arr2=[1,2,3];
 console.log(arr1==arr2); // Output: false

 let arr3=arr1;

 console.log(arr1==arr3); // Output: true
