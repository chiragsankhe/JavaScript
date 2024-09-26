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
const profile = {
  user_name : "chirag sankhe ",
  followers : "145K",
  following : 2000,
  post : 555,
  message : "always smile"
  }
console.log(profile);
```

## operators and conditional statement 

####Comments in JavaScript
Comments are used to explain code and make it more readable. JavaScript provides two types of comments:

### Single-line comments:
Start with // and continue to the end of the line.
```
 This is a single-line comment
let x = 5; // Another single-line comment
```
### Multi-line comments:
Start with /* and end with */. They can span multiple lines.
```
/* 
This is a multi-line comment.
It can be used to explain more complex code. 
*/
let y = 10;
```
## Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers.

+: Addition
-: Subtraction
*: Multiplication
/: Division 
%: Modulus (remainder)
**: Exponentiation (ES6)
## Example:
```
let a = 10;
let b = 5;
let sum = a + b; // 15
let product = a * b; // 50
let remainder = a % b; // 0
let power = a ** 2; // 100 (10 squared)
```
### Unary Operators
Unary operators operate on a single operand.

## Increment (++): 
Increases a variable by 1.
## Decrement (--):
Decreases a variable by 1.
## Unary negation (-): 
Negates the value.
## Unary plus (+): 
Tries to convert a non-number into a number.
### Example:
```
let x = 5;
x++; // 6 (post-increment)
++x; // 7 (pre-increment)

let y = -x; // -7 (unary negation)
let z = +"123"; // 123 (convert string to number)
```
## Assignment Operators
Assignment operators are used to assign values to variables.

=: Basic assignment
+=: Add and assign
-=: Subtract and assign
*=: Multiply and assign
/=: Divide and assign
%=: Modulus and assign
**=: Exponent and assign (ES6)

### Example:
```
let x = 10;
x += 5; // 15 (x = x + 5)
x *= 2; // 30 (x = x * 2)
x %= 7; // 2 (x = x % 7)
```
## Comparison Operators

Comparison operators are used to compare two values and return a boolean (true or false).

+ ==: Equal to (compares values after type conversion)
+ ===: Strict equal (compares both value and type)
+ !=: Not equal to
+ !==: Strict not equal
+ >: Greater than
+ <: Less than
+ >=: Greater than or equal to
+ <=: Less than or equal to


### Example:
```
let a = 10;
let b = '10';
```
console.log(a == b); // true (value is the same after type conversion)
console.log(a === b); // false (strict comparison checks type)
### Logical Operators
Logical operators are used to combine conditional statements.

+ &&: Logical AND (returns true if both operands are true)
+ ||: Logical OR (returns true if at least one operand is true)
+ !: Logical NOT (inverts the truth value)

### Example:
```
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```
### Ternary (Conditional) Operator
The ternary operator is a shorthand for if-else statements.
```
Syntax:
 condition ? expression_if_true : expression_if_false;
```
### Example:

```
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Not an adult";
console.log(isAdult); // Adult
```
## Conditional Statements
### if Statement
The if statement is used to execute a block of code only if a specified condition is true.
```
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```
###  if-else Statement
The if-else statement adds an alternative block of code to execute if the condition is false.
```
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```
### else-if Statement
The else-if statement allows you to specify multiple conditions. It is used when you have more than two possible outcomes.
```
let score = 85;
if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 70) {
  console.log("C grade");
} else {
  console.log("Fail");
}
```
### conditinal question prac
+ pratice question 1
```
let age = 21;

if(age > 18 )
    {
        console.log("you can vote");
        
    }
    else{
        console.log("you are not able to vote");
    }
```

 + practice question 2
    
```
    let wather = "moon";
    let color;

    if(wather == "sunny")
        {
            color="yello";
        }
        else{
            color = "white";
        }

        console.log(color);
```
        practice question 3
```
        let x = 1;

        if(x%2 == 0 )
            {
                console.log("x is even no ");

            }
            else{
                console.log("odd no ");
            }

```
            practice question 4
```
            let age2 = 23;

            if(age2 <18)
                {
                    console.log("junior");
                }
                else if (age2>18 & age2<29) {
                    console.log("senior");

                }
                else
                {
                    console.log("married");;
                }
```
                 practice question 5
```
                let name = "chirag";
               let result =  name =="prachi" ? " true" : "false";

               console.log(result);
```
  ###  switch statement 
```
            let grade = "B";
            let result2;

            switch (grade)
            {
                case 'A':
                result2 = "marks >90";
                break;


                case 'B':
                    result2 = "markas > 80";
                    break;

                    case 'c':
                    result2 = "markas > 70";
                    break;

                    default:
                        result2 = "less than 70";
            }

            console.log(result2);
```

### MDN Docs (Mozilla Developer Network)
MDN Web Docs is a comprehensive resource for web developers, providing detailed documentation and tutorials on JavaScript, HTML, CSS, and more. It is often referred to for accurate and up-to-date information on web technologies. You can access JavaScript documentation on MDN here: MDN JavaScript Docs

MDN is widely considered one of the best resources for learning JavaScript, as it covers:

+ Syntax
+ Functions
+ Operators
+ Objects and arrays
+ ES6 and newer features
+ Browser-specific APIs
+ Feel free to explore MDN to get in-depth knowledge and examples!


       
## practice question 2

  + get user to input a number using promt (" enter a number "). check if the number id a multiplr of 5 or not
```
            let roll_no = prompt("enter a no"  ) ;

            if(roll_no % 5 == 0)
                {
                    
                    console.log("roll_no is multipal of 5");
                }
                else {
                    console.log("roll_no is not  multipal of 5");
                }
```           
  + write a code which can give you gredes to student according to score;
```
                  let scores = prompt("enter your scores:");
                 let grades ;

                 

                    if (scores>=80 & scores<=100){
                        grades = "A";
                    }

                    
                    
                    else if (scores>=70 & scores<=79)
                    {
                        grades = "B";

                    }
                    else if (scores>=60 & scores<=69)
                {
                    grades = "C";

                }
                     else if (scores>=50 & scores<=59)
                     {
                        grades = "D";

                     }
                     else
                     {
                        grades = "F";

                     }

                 console.log(grades);
```
