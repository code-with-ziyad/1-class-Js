//primitive
// 7 types: string, boolean, Number, null, undefine, symbol, BigInt:

// Non Primitive 
// Array, object, function


// Important topic : object and Browser ke web event


// JavaScript is a dynamically typed language.

// java script

let x = 5;       // x is a number
x = "hello";     // now x is a string

// type script

// let x: number = 5;
// x = "hello"; // ❌ Error: Type 'string' is not assignable to type 'number'

// Array 

const programming = ["javascript", "java", "python", "c"]

// OBJECT

let myObj = {
    name: "ziyad",
    number: 20939,

}

// symbol 

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object