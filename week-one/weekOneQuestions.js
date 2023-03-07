/*
    ** PROBLEM #1: What should the following evaluations return? **
    2 == '2' --> true (loose equality)
    'he' == 'she' --> false (differet string values)
    2 === 2 --> true (same type and value)
    'true' == true --> false (not same value) 
    true === true --> true (same type and value)
    'true' != true --> true (not same type or value)
    'true' !== true --> true (not same type or value)
    

    ** PROBLEM #2: What are the three different ways you can declare a variable? And what is the differences between them? **
    var: 
        - globally scoped
        - hoisted
        - should not be used
*/
var num = 42;
/* 
    let: 
        - locally scoped
        - hoisted (but is not initialised)
        - varibales can be updated but not reassigned
*/
let firstName = "Jason";
// let name = "Jason"; // not allowed  
firstName = "John";
/*
    const: 
        - locally scoped
        - hoisted (but is not initialised)
        - variables cannot be updated or reassigned (properties of an object declared with const can still be updated)
*/ 
const lastName = "Doe";
// const lastName = "Saint-John"; // not allowed
// lastName = "Saint-John"; // not allowed


// ** PROBLEM #3: Write a simple function for each type of these functions: First-Class, Higher-Order, Callback **

// First-Class Function is assigned to a variable
const printName = (n1, n2) => { // O(1)
    // console.log(`${n1} ${n2}`);
}
printName(firstName, lastName);

// Higher-Order Functions take in another function as an argument (printNameHO)
// Callback functions are passed into another function as an argument, and then invoked inside the outer function (printName passed in as fn argument)
const printNameHO = (fn) => { // O(1) // Higher-Order
    fn(firstName, lastName); // O(1) // Callback
}
//printNameHO(printName);


// ** PROBLEM #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below? **  
const a = 'hi';  
// console.log(c); // ReferenceError --> out of scope  
 
const someFunction = (arg) => { // O(1)
    const b = 'bye';  
 
    if (arg) { 
        const c = 'see ya!'; 
        console.log(a); // hi
        console.log(b); // bye
    }  
}
// someFunction(); // hi bye

// ** Problem #5: Given the following data structure, write a for loop using: For statement and For...of **
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < someArray.length; i++){ // O(n)
    // console.log(i);
}

for(const num of someArray){ // O(n)
    // console.log(num);
}


// ** Problem #6: Given the following data structure (label each one as either Mutative or Non-Mutative): **  
/*
    .concat():
        - O(n)
        - non-mutative
        - called on one array
        - second array passed in as an argument --> this arrays elements will be added onto the end of the the new array in the same order
        - returns a new array with the values of the two merged arrays
*/
const someOtherArray = [1, 2, 3];
const anotherArray = [4, 5]; 
const newArray = someOtherArray.concat(anotherArray); // [ 1, 2, 3, 4, 5 ]
/*
    .length:
        - O(1)
        - All arrays have a length property
        - length = total amount of elements in the array
*/
newArray.length; // 5
/*
    .filer():
        - O(n)
        - non-mutative
        - takes in a callback function
        - returns a new array with elements that pass the conditions of the callback function
        - return an empty array if no elements passes conditons
*/
const noThree = newArray.filter((num) => num !== 3); // [ 1, 2, 4, 5, ]
/*
    .find():
        - O(n)
        - non-mutative
        - takes in a callback function
        - returns the first element to pass the conditons of the callback function
        - return undefined if no element passes conditons
*/
newArray.find((el) => el === 5); // 5
/*
    .slice():
        - O(n)
        - non-mutative
        - param #1: starting index --> begin removing elements
        - param #2: ending index --> stop removing elements
        - return array with removed elements
*/
newArray.slice(2, 4); // [ 3, 4 ]
/*
    .splice():
        - O(n)
        - mutative
        - param #1: starting index
        - param #2: amount of elements to remove
        - param #3+: values to be added from starting index
        - returns altered array
*/
// newArray.splice(2, 2); // [ 1, 2, 5 ]
/*
    .includes():
        - O(n)
        - non-mutative
        - param #1: value to be searched
        - returns boolean based on if the value is in the array
*/
newArray.includes(4); // true
/*
    .indexOf():
        - O(n)
        - non-mutative
        - param #1: value to be searched
        - returns the index of the searched for value
        - returns -1 if value is not in the array
*/
newArray.indexOf(2); // 1
newArray.indexOf(22); // -1
/*
    .isArray():
        - O(1)
        - non-mutative
        - param #1: value to be checked
        - returns boolean based on if value is an array
*/ 
const number = 13;
Array.isArray(number); // false
Array.isArray(newArray); // true
/*
    .join():
        - O(n)
        - non-mutative
        - concatenates all strings from an array
        - param #1: string to seperate each element
        - returns single string of all elements from array
*/
newArray.join(", "); // 1, 2, 3, 4, 5
/*
    .map():
        - O(n)
        - non-mutative
        - param #1: callback function
        - returns array with elements that pass conditions of the callback function
*/
const multiplyElements = newArray.map((el) => el * 2); // [ 2, 4, 6, 8, 10 ]
/*
    .pop()
        - O(1)
        - mutuative
        - removes the last element from the array
        - return the removed element
*/
newArray.pop(); // 5
/*
    .push()
        - O(1)
        - mutative
        - adds an element to the end of an array
        - returns length of the altered array
*/
newArray.push(4.5); // 5
/*
    .shift()
        - O(n)
        - mutative
        - removes an element from the begining of an array
        - returns the removed element
*/
newArray.shift(); // 1
/*
    .unshift()
        - O(n)
        - mutative
        - param #1: element to be added to the begining of an array
        - returns length of altered array
*/
newArray.unshift(1) // 5
/*
    .sort()
        - O(n)
        - mutative
        - param #1: callback function
        - returns sorted array based of callback function condtions
*/
let newerArray = [9, 1, 3, 5];
newerArray.sort((a, b) => a - b); // [ 1, 3, 5, 9 ]
/*
    .reduce()
        - O(n)
        - non-mutative
        - param #1: callback function with accumulator and currentElement
        - returns single value which is the result of the callback function being called on each element
*/
newerArray.reduce((total, currEl) => total += currEl); // 18


// ** PROBLEM #7: Given the following methods: **
const someObject = {
    color: "black"
}
/*
    .assign()
        - O(n)
        - mutative
        - param #1: target object
        - param #2: source object
        - returns target object with source properties
*/
const fullName = {name: "John Doe"};
Object.assign(someObject, fullName);
// Use the dot notation to add a new key value pair of: age: 22 
someObject.age = 22;
// Use the bracket notation to add a new key value pair of:    address: ‘123 test address’
someObject['address'] = "123 test address";
/*
    .keys()
        - O(n)
        - non-mutative
        - param #1: an object
        - returns an array of keys present in object
*/
Object.keys(someObject); // [ 'color', 'name', 'age', 'address' ]
/*
    .values()
        - O(n)
        - non-mutative
        - param #1: an object
        - returns an array of values present in object
*/
Object.values(someObject); // [ 'black', 'John Doe', 22, '123 test address' ]

for(const prop in someObject){
    // console.log(someObject[prop]);
}


// ** PROBLEM #8: Given the following data structure se either the for statement or for...of loop to console.log each of the keys Values. **
const numbers = [ 
    { 
        num: 1 
    }, 
    { 
        num: 2 
    }, 
    { 
        num: 3 
    } 
];

for(const obj of numbers){
    //console.log(obj.num);
}


// PROBLEM #9: Create a new Set() object
const pseudonymOne = new Set();
pseudonymOne.add("john doe");

if(pseudonymOne.has("john doe")) pseudonymOne.delete("john doe"); 


// PROBLEM #10: Create a new Map() object
const pseudonymTwo = new Map();
pseudonymTwo.set("name", "john doe");
if(pseudonymTwo.has("name")) pseudonymTwo.delete("name"); 

/*
    PROBLEM #11: Explain what asynchronous programming means in 3 sentences. 
        The ability to halt certain execution contexts while waiting for a process to finish; while waiting, the programme can continue running other functions. Once previously halted functions have the data they were waiting for, the programme will return to these functions to continue their execution. Asynchronous programming is essential when working with APIs as the time it takes to receive their payloads can drastically slow down execution if we were to wait until they returned to move.

    PROBLEM #12: Explain what call back hell is.  
        Callback hell is when a developer has too heavily relied on callback methods to automate a task. Regardless of whether the intended output is achieved, having many nested callbacks can render the code difficuly  to read by other developers (and likely the original developer, given enough time away from the code base), and readable code is just as important as function code. 
    
    PROBLEM #13: Explain what is a promise and describe the possible states of promises.  
        A promise is a type of object representing potential data. It exists in one of three states: 
            - pending: initial state
            - fulfilled: operation successfully completed
            - rejected: operation failed
        As we're waiting for the data to be recieved, the state of the promise is set to pending. Once we have the data, it moves to the fulfilled state. If for any reason we do not get the expected data from promise, it results in an error and it's state is moved to rejected. In all a promise is the representation of expected data; we can use asynchronous programming to work around promises (instead of halting execution while a promise is pending, we continue and return to the promise once it's state is either fulfilled or rejected) to increase efficiency.   
    
    PROBLEM #14: What is async/await? 
        asyncy and await are javascript keywords that denote an asynchronous function. These function suspend their execution until the return promise is fulfilled or rejected. They return the promise based on the conditions of the asynchronous function(s).

    */
// fetch-requests
// PROBLEM #15:
// PROBLEM #16:


// OOP.js
// PROBLEM #17:
// PROBLEM #18: