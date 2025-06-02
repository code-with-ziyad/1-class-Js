let someNumber = 55;
let stringNumber = String(someNumber);
console.log(typeof someNumber);
console.log(typeof stringNumber);

let number = 6;
let Number = 5;
console.log(number+Number);



let userOnline = false;   // OUTPUT: user is offline   

if(userOnline){
    console.log("user is online");
    
}
else{
    console.log("user is offline");
    
}

let age = 18;

if (age >= 18) {
  console.log(true);
} else {
  console.log(false);
}

let x = "5";
let y = 5;

console.log(x == y);  // true (loose equality, type conversion hoti hai)
console.log(x === y); // false (strict equality, type bhi check hoti hai)


console.log(Boolean(0));        // false
console.log(Boolean(123));      // true
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
