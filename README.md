# JavaScript
javaScript notes and codes
## What is JavaScript?
JavaScript (JS) is a high-level, interpreted programming language that is widely used to add interactivity to web pages. It is an essential part of web development, alongside HTML and CSS. JavaScript is often used for:

Manipulating HTML and CSS to create dynamic content.
Handling events like user clicks, form submissions, or keypresses.
Communicating with servers via APIs (AJAX, Fetch API).
Building full-stack applications using frameworks like Node.js.

## Variables in JavaScript
Variables in JavaScript are containers for storing data values. Variables allow you to store data that can be used and manipulated throughout your code. 
You can declare variables in JavaScript using three keywords: var, let, and const.

## Rules for Variable Declaration in JavaScript

Variable names are case-sensitive: myVariable and MyVariable are treated as two different variables.
Variable names can start with letters, $, or _: They cannot start with numbers.
No spaces: Variable names should not have spaces.
Reserved keywords cannot be used as variable names: For example, you cannot name a variable function, return, etc.
### let, const, and var
var: The oldest way to declare variables. Variables declared with var are function-scoped or globally scoped and can be re-declared or updated.
```
var x = 10;
var x = 20; // Re-declaration allowed with var
```
### let:
  Introduced in ES6 (ES2015), let is block-scoped (i.e., within {}), meaning it is only accessible within the block where it is defined. Variables declared with let can be updated but not re-declared within the same scope.

```
let y = 10;
y = 20; // Allowed


let y = 30; // Error: Cannot redeclare variable 'y'
```
### const:
Used to declare variables that cannot be re-assigned. Like let, const is also block-scoped. It must be initialized during declaration and cannot be updated afterward. However, objects and arrays declared with const can still have their properties or elements modified.
  ```
const z = 10;
z = 20; // Error: Cannot re-assign a constant variable
```
## Data Types in JavaScript
JavaScript has various data types that are divided into two categories: Primitive and Non-Primitive (Reference types).

## 1. Primitive Data Types
### Number:
  Represents both integer and floating-point numbers.
```
let num = 10;
let floatNum = 10.5;
```
### String:
   A sequence of characters, enclosed in single ('), double ("), or backticks (`).
```
let name = 'John';
let greeting = `Hello, ${name}`; // Template literal
```
### Boolean: 
Represents true or false.
```
let isTrue = true;
let isFalse = false;
```
### Undefined:
   A variable that has been declared but not assigned a value.
```
let a;
console.log(a); // Output: undefined
```
### Null:
Represents the intentional absence of any object value.
```
let emptyValue = null;
```
### Symbol:
   A unique and immutable primitive value, often used for object property keys.
```
let symbol = Symbol('description');
```
### BigInt: 
Allows safe representation of integers beyond the Number type's safe limit.
```
let bigNum = BigInt(12345678901234567890);
```
## 2. Non-Primitive Data Types (Reference types)

### Object:
An unordered collection of key-value pairs.
```
let person = {
  name: 'John',
  age: 25
};
```
### Array: 
A list-like object used to store multiple values.
```
let fruits = ['Apple', 'Banana', 'Orange'];
```
### Function: 
A block of code designed to perform a specific task.
```
function greet() {
  return 'Hello!';
}
```
### Date:  
Represents dates and times.
  ```
let today = new Date();
```

```
## Example Code
javascript

 Variable Declaration with let, const, and var
var x = 10; // globally scoped or function-scoped
let y = 20; // block-scoped
const z = 30; // block-scoped and cannot be reassigned

 Data types in JavaScript
let name = 'John'; String
let age = 25;  Number
let isStudent = true;  Boolean
let address;  Undefined
let score = null;  Null

  Object and Array (Non-Primitive)
let person = {
  firstName: 'John',
  lastName: 'Doe'
};
```
## pratice question

1. crete a const object called "product " to store information shown in the pichure (pen)
   ```
   const product = {
    product_name :"cello",
    rating  : 4.5,
    color : "red, blue",
    mrp : 10 
     }
 console.log(product);
 ```
2. create a const call "proflile"
```
const profile ={
user_name : "chirag sankhe ",
followers : "145K",
following : 2000,
post : 555,
message : "always smile"
  }
console.log(profile);
```



