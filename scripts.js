//Declared var without an assigned value 
var i;
console.log(i);

// A property that doen't exist on an object
var obj = {};
console.log(obj.name);

//A return from a function without a value 
var test = function () {
    return;
};
console.log(test());

//function parameters that are not provided with an argument
var test2 = function (num) {
    console.log(num);
};
test2();

// test  if a = undefined 
var a;
if (!a) {
    a = 100;
}
console.log(a);

// test  if a = undefined 
var a;
if (a === undefined) {
    a = 100;
}
console.log(a);

//test  if a = undefined 

if (typeof a === "undefined") {

    a = 100;
}
console.log(a);

/*
undefined :represents an absence of value , assigned by the system , so you should let undefined just happen.
null : represents an absence of value ,assigned bu the program , if you are assigning an absence of value , use null.
*/
