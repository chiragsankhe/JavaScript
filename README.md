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

+ Increment (++): 
Increases a variable by 1.
+ Decrement (--):
Decreases a variable by 1.
+ Unary negation (-): 
Negates the value.
+ Unary plus (+): 
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
+ practice question 3
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
+ practice question 4
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
 + practice question 5
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


## Loops in JavaScript
Loops in JavaScript allow us to repeatedly execute a block of code until a certain condition is met.

+ for Loop
The for loop is commonly used when you know how many times you want to iterate.

Syntax:
```
for (initialization; condition; increment) {
  // Code to execute
}
```
### Example:
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```
+ while Loop
The while loop repeats a block of code as long as a specified condition is true.

Syntax:
```
while (condition) {
  // Code to execute
}
```
### Example:
```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4
```
+ do-while Loop
The do-while loop is similar to the while loop, but it executes the code block at least once before checking the condition.

Syntax:
```
do {
  // Code to execute
} while (condition);
```
### Example:
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4
```
+ for-of Loop
The for-of loop is used to iterate over the elements of iterable objects like arrays or strings.

Syntax:
```
for (element of iterable) {
  // Code to execute
}
```
### Example:
```
let fruits = ['Apple', 'Banana', 'Orange'];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Banana, Orange
```
+ for-in Loop
The for-in loop is used to iterate over the properties of an object (keys or indices).

Syntax:
```
for (key in object) {
  // Code to execute
}
```
### Example (Object):
```
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output: name: John, age: 30
```
### Example (Array - not commonly used for arrays):
```
let arr = ['A', 'B', 'C'];
for (let index in arr) {
  console.log(index); // Outputs index numbers: 0, 1, 2
}
```
## Strings in JavaScript
Strings in JavaScript are sequences of characters used to represent text.

### Example:
```
let greeting = "Hello, World!";
```
### Template Literals
Template literals (introduced in ES6) allow for embedding expressions within strings using backticks (`) and ${expression}.

### Example:
```
let name = "John";
let message = `Hello, ${name}! How are you?`;
console.log(message); // Output: Hello, John! How are you?
```
Template literals also allow multi-line strings:
```
let multiline = `This is
a multiline
string.`;
```
## String Methods in JavaScript
There are many useful string methods in JavaScript. Some commonly used ones are:

+ length: Returns the length of the string.
```
let str = "Hello";
console.log(str.length); // 5
```
+ toUpperCase() / toLowerCase(): Converts the string to uppercase or lowercase.
```
console.log(str.toUpperCase()); // HELLO
console.log(str.toLowerCase()); // hello
```
+ charAt(index): Returns the character at the specified index.
```
console.log(str.charAt(0)); // H
```
+ includes(substring): Checks if the string contains the specified substring.
```
console.log(str.includes("ell")); // true
```
+ indexOf(substring): Returns the index of the first occurrence of the substring. Returns -1 if not found.
```
console.log(str.indexOf("l")); // 2
```
+ slice(start, end): Extracts a section of a string and returns it as a new string.
```
let part = str.slice(1, 4); // "ell"
```
+ replace(searchValue, newValue): Replaces the first match of a substring with a new value.
```
let newStr = str.replace("Hello", "Hi"); // "Hi"
```
+ split(separator): Splits the string into an array of substrings.
```
let words = str.split(" "); // ["Hello"]
```
# Practice
### Example of Loops:

+ For loop to print numbers 0 to 4
 ```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

+ While loop to print numbers 0 to 4
```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
+ Do-while loop to print numbers 0 to 4
```
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
```

+ For-of loop to iterate over an array
```
let fruits = ['Apple', 'Banana', 'Orange'];
for (let fruit of fruits) {
  console.log(fruit);
}
```

+ For-in loop to iterate over an object's properties
```
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```
## Example of Strings:
```
let name = "John";
let greeting = `Hello, ${name}!`; // Template literal
console.log(greeting); // Output: Hello, John!
```
```
let str = "JavaScript is awesome!";
console.log(str.length); // 22
console.log(str.toUpperCase()); // JAVASCRIPT IS AWESOME!
console.log(str.includes("awesome")); // true
console.log(str.slice(0, 10)); // "JavaScript"
You can use these string methods and loops in your JavaScript practice to manipulate data effectively!

```


## Arrays in JavaScript
An array is a special variable in JavaScript that can hold multiple values at once. Arrays are zero-indexed, meaning the first element has an index of 0.

### Declaring an Array:
```
let fruits = ['Apple', 'Banana', 'Orange'];
let numbers = [1, 2, 3, 4, 5];
```
### Accessing Array Elements:
```
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
```
### Modifying Elements:
```
fruits[1] = 'Mango'; // Changing Banana to Mango
console.log(fruits); // ['Apple', 'Mango', 'Orange']
```
### Array Properties:
+ length:
Returns the number of elements in the array.
```
console.log(fruits.length); // 3
```
### Looping Over Arrays
You can loop over arrays using different loop constructs.

+ for Loop
```
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Output: 1, 2, 3, 4, 5
```
+ for-of Loop
```
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Mango, Orange
```
+ forEach() Method
The forEach() method executes a function for each array element.
```
fruits.forEach(function(fruit, index) {
  console.log(`${index}: ${fruit}`);
});
// Output: 
// 0: Apple
// 1: Mango
// 2: Orange
```
## Array Methods
### Adding/Removing Elements
+ push():
  Adds an element to the end of the array.
```
fruits.push('Grapes');
console.log(fruits); // ['Apple', 'Mango', 'Orange', 'Grapes']
```
+ pop():
  Removes the last element from the array.
```
fruits.pop();
console.log(fruits); // ['Apple', 'Mango', 'Orange']
```
+ shift():
  Removes the first element of the array.
```
fruits.shift();
console.log(fruits); // ['Mango', 'Orange']
```
+ unshift(): 
Adds an element to the beginning of the array.
```
fruits.unshift('Strawberry');
console.log(fruits); // ['Strawberry', 'Mango', 'Orange']
```
### Finding and Sorting Elements
+ indexOf():
  Returns the index of the first occurrence of an element.
 ```
console.log(fruits.indexOf('Orange')); // 1
 ```
+ includes():
Checks if an element exists in the array.
```
console.log(fruits.includes('Mango')); // true
```
+ sort():
Sorts the array alphabetically or in ascending order for numbers.
```
let numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5]
```
+ reverse():
Reverses the array.
```
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
```
### Extracting and Modifying Arrays
+slice(start, end):
Extracts a section of an array and returns a new array.
```
let slicedFruits = fruits.slice(0, 2); // ['Strawberry', 'Mango']
```
+ splice(start, deleteCount, items...):
Removes or replaces elements in the array and can add new elements.
```
fruits.splice(1, 1, 'Peach'); // Removes Mango, adds Peach
console.log(fruits); // ['Strawberry', 'Peach', 'Orange']
```
### Array Transformation
+ map():
Creates a new array by applying a function to each element.
```
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16]
```
+ filter():
Creates a new array with elements that pass a test.
```
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```
+ reduce():
Reduces an array to a single value by applying a function.
```
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```
## Practice Questions
+ Find the Sum of All Elements in an Array
```
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // Output: 150
```
+ Filter Out Odd Numbers from an Array
```
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```
+ Convert an Array of Strings to Uppercase
```
let fruits = ['apple', 'banana', 'orange'];
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']
```
+ Check if All Elements in an Array are Positive
```
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true
```
+ Find the Maximum Number in an Array
```
let numbers = [10, 25, 5, 42, 30];
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 42
```

+ practice question 1 
```
                     let marks = [85,97,44,37,76,60];

                      let sum = 0;
                    

                     for(let i=0;i<marks.length;i++)
                         {
                             sum +=  marks[i];

                         }

                         let avg = sum /marks.length;
                         console.log(avg);
```
+ pratice question 2
```
                     let price = [250,645,300,900,50];

                     for(let i = 0 ;i<=price.length;i++)
                         {
                            let offer = price[i]/10;
                            console.log( price[i]," in offer " , price[i]-offer);
                        }

```
+ --------array--- push(add) ---pop(delete from end) --- toString -------------                   
```
                       let name = ["chirag ", "prachi ", "pranjal", ];

                       name.push( "yadnesh","manisha" , "manoj" , "sankhe");

                       console.log(name);

                       name.pop();

                       console.log(name);

                       console.log(name.toString());
```
+ --- concat(join array) --- unshit( add to start) -- shift (delete from start)
```
                    let num = [1,2,3,4,5];
                    let num2 = [11,22,33,44,55];

                   

                    num.unshift(0);
                    num.shift();
                    console.log(num.concat(num2));
```
+ --------------- slice(return a pice of array) ------------- splice(change original array(add,removemreplace)) -------
                
```

       let name = ["chirag ", "prachi ", "pranjal", ];

          console.log(name.slice());

              console.log(name.splice(1,1,"sankhe"));

              let num = [1,2,3,4,5];

            let new_num= num.splice(1,2,22,33);

               console.log(num );
```
  + questions 
```
            // let companys =["bloomberg","microsoft","uber","google","ibm","netflix"];
                
            // companys.shift();

            // companys.splice(1,1,"ola");

            // companys.push("amazon");

            // console.log(companys);
```
          
### Additional Practice Questions
+ Reverse an Array Without Using reverse()
+ Find the First Element in an Array That is Greater Than 10
+ Merge Two Arrays and Remove Duplicates
+ Sort an Array of Numbers in Descending Order
+ Find the Average of Numbers in an Array
+ By practicing these array concepts and methods, you will improve your understanding of how to manipulate arrays efficiently in JavaScript.


## Functions in JavaScript
Functions are reusable blocks of code designed to perform a specific task. They are a core feature of JavaScript, allowing us to write clean and efficient code by encapsulating logic into modular blocks.

### Defining a Function:
A function is defined using the function keyword, followed by the function name, parentheses for parameters, and curly braces for the code block.
```
function greet(name) {
  console.log("Hello, " + name + "!");
}
```
### Calling a Function:
Once a function is defined, it needs to be called to execute the code inside it.
```
greet("John"); // Output: Hello, John!
```
## Function Parameters and Arguments
+ Parameters:
  Variables listed inside the parentheses in the function definition.
+ Arguments:
  Values passed to the function when it is called.
```
function add(a, b) {  // a, b are parameters
  return a + b;
}
console.log(add(2, 3)); // 2, 3 are arguments; Output: 5
```
### Returning Values
Functions can return values using the return statement.
```
function multiply(a, b) {
  return a * b;
}
let result = multiply(5, 10); // result = 50
```
### Local Variables
Variables declared inside a function are local and accessible only within that function.
```
function localScope() {
  let localVar = "I'm local";
  console.log(localVar);
}
localScope(); // Output: I'm local
// console.log(localVar); // Error: localVar is not defined
```
### Arrow Functions
Arrow functions, introduced in ES6, provide a shorter syntax for writing functions.
```
const greet = (name) => {
  console.log("Hello, " + name + "!");
};
```
### For single-line functions, the braces can be omitted:
```
const greet = (name) => console.log("Hello, " + name + "!");
Arrow functions are often used for shorter, simpler tasks, and are more concise compared to regular functions.
```
### Higher-Order Functions
A higher-order function is a function that takes another function as an argument or returns a function. These are common in JavaScript when working with arrays and functional programming techniques.
```
function higherOrderFunction(callback) {
  callback();
}
function greet() {
  console.log("Hello!");
}
higherOrderFunction(greet); // Output: Hello!
```
### Array Methods with Functions
JavaScript provides several array methods that use functions as callbacks.

+ forEach()
Executes a function for each element in the array.
```
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * num));
// Output: 1, 4, 9, 16 (square of each number)
```
+ map()
The map() method creates a new array by applying a function to each element of the original array.
```
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]
```
+ reduce()
The reduce() method reduces an array to a single value by applying a function to an accumulator and each element.
```
let numbers = [10, 20, 30, 40];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 100
```
Example - Finding the Largest Element:
```
let maxNum = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(maxNum); // Output: 40
```
+ filter()
The filter() method creates a new array with elements that pass a test (function).
```
let marks = [55, 92, 88, 99, 74];
let highScores = marks.filter(score => score > 90);
console.log(highScores); // Output: [92, 99]
```
### Practice Questions

+ Count the Occurrence of Vowels in a String
```
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}
console.log(countVowels("Hello World")); // Output: 3
```
+ Print the Square of Each Value in an Array Using forEach
```
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * num));
// Output: 1, 4, 9, 16
```
+ Calculate the Sum of an Array Using reduce
```
let numbers = [5, 10, 15, 20];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 50
```
+ Find the Factorial of a Number Using reduce
```
function factorial(n) {
  let numbers = Array.from({ length: n }, (_, i) => i + 1);
  return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(factorial(5)); // Output: 120
```
+ Filter Out Students Who Scored More Than 90
```
let scores = [78, 92, 85, 91, 88];
let topScores = scores.filter(score => score > 90);
console.log(topScores); // Output: [92, 91]
```
## Functions as Arguments
Functions in JavaScript can also be passed as arguments to other functions, allowing us to create more flexible and reusable code.

Example:
```
function greet(name) {
  return "Hello " + name;
}
function logGreeting(fn, name) {
  console.log(fn(name));
}
logGreeting(greet, "Alice"); // Output: Hello Alice
```

# Introduction to DOM
### (Document Object Model)
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree of objects, allowing developers to access and manipulate elements on a web page using JavaScript.

## DOM Tree Structure
The DOM represents an HTML document as a tree of nodes, where each element, attribute, and piece of text is a node. The structure looks like this:

**Parent** nodes contain **child** nodes.
**Siblings** are nodes that share the same parent.
The entire document is part of the **window** object, which is the global object in the browser.


![tree](https://github.com/chiragsankhe/JavaScript/blob/main/images/dom_tree.png)



## Accessing and Manipulating DOM Elements
+ Accessing Elements by ID:-
  
 You can use `document.getElementById()` to access an element by its ID.
```
let heading = document.getElementById('main-heading');
console.log(heading.innerText); // Logs the text inside the element with id 'main-heading'
```
```
<h2>JavaScript HTML DOM</h2>

<p id="intro">Finding HTML Elements by Id</p>
<p id="p1">hello chirag sankhe</p>

<p id="demo"></p>

<script>
const element = document.getElementById("p1");

document.getElementById("demo").innerHTML = 
"hello engineer " + element.innerHTML;

</script>

output

avaScript HTML DOM
Finding HTML Elements by Id

hello chirag sankhe

hello engineer hello chirag sankhe

```

+ Accessing Elements by Class Name:-
  
 `document.getElementsByClassName()` returns a collection of elements that have a certain class. The result is an `HTMLCollection,` which is similar to an array but not exactly the same.
```
let items = document.getElementsByClassName('list-item');
console.log(items[0].innerText); // Access the first element with class 'list-item'
```
```
<h2>JavaScript HTML DOM</h2>

<p>Finding HTML Elements by Class Name.</p>
<p class="intro">hello everyone </p>
<p class="intro">i m chirag sankhe </p>
<p class="intro">i m learning javascript </p>

<p id="demo"></p>

<script>
const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x[1].innerHTML;
</script>

output
JavaScript HTML DOM
Finding HTML Elements by Class Name.

hello everyone

i m chirag sankhe

i m learning javascript

The first paragraph (index 0) with class="intro" is: i m chirag sankhe

```

+ Accessing Elements by Query Selector:-
  
 The `querySelector()` method allows you to select elements using CSS-style selectors. It returns the first matching element, while `querySelectorAll()` returns all matching elements.
```
let firstItem = document.querySelector('.list-item'); // Selects the first element with class 'list-item'
let allItems = document.querySelectorAll('.list-item'); // Selects all elements with class 'list-item'
```
## querySelector()
```
<p>Finding HTML Elements by Query Selector</p>
<p class="intro">Hello World!.</p>
<p class="intro"> example of  <b>querySelectorAll</b> method.</p>

<p id="demo"></p>

<script>
const x = document.querySelector("p.intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x.innerHTML;
</script>

output

JavaScript HTML DOM
Finding HTML Elements by Query Selector

Hello World!.

example of querySelector method.

The first paragraph (index 0) with class="intro" is: example of Hello World!
```
 ## querySelectorAll()
```
 <p>Finding HTML Elements by Query Selector</p>
<p class="intro">Hello World!.</p>
<p class="intro"> example of  <b>querySelectorAll</b> method.</p>

<p id="demo"></p>

<script>
const x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 1) with class="intro" is: ' + x[1].innerHTML;
</script>

output

JavaScript HTML DOM
Finding HTML Elements by Query Selector

Hello World!.

example of querySelectorAll method.

The first paragraph (index 0) with class="intro" is: example of querySelectorAll method.
```
## Manipulating DOM Elements
1. Changing Content with `innerHTML` and `innerText`
+ innerHTML:
Sets or returns the HTML content of an element, including its child elements.
+ innerText:
Sets or returns the text content of an element, excluding HTML tags.
```
let heading = document.getElementById('main-heading');
heading.innerText = "Welcome to JavaScript DOM!"; // Changes the text inside the element
heading.innerHTML = "<span style='color: red'>Welcome</span> to JavaScript!"; // Inserts HTML content
```
example 
```
<h2>JavaScript can Change HTML</h2>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text chirag sankhe";
</script>

output

JavaScript can Change HTML
New text chirag sankhe
```
```
<script>
const element = document.getElementById("id01");
element.innerHTML = "New Heading";
</script>

```

+ Changing Element Attributes
You can change attributes like src, href, and alt for elements like images and links using setAttribute().
```
let image = document.getElementById('logo');
image.setAttribute('src', 'new-logo.png'); // Changes the source of the image
```
```
<h2>JavaScript HTML DOM</h2>
<img id="image" src="smiley.gif" width="160" height="120">

<script>
document.getElementById("image").src = "landscape.jpg";
</script>
<p>The original image was smiley.gif, but the script changed it to landscape.jpg</p>
```
 + Changing Style
You can modify the inline styles of an element using the style property.
```
let heading = document.getElementById('main-heading');
heading.style.color = "blue";  // Changes the text color to blue
heading.style.fontSize = "24px";  // Changes the font size
```
## Relationship Between DOM Elements
 Parent, Child, and Sibling Nodes
+ Parent Node: 
The element that contains other elements.
+ Child Node: 
An element that is nested within another element.
+ Sibling Node: 
Elements that share the same parent.
```
let parent = document.getElementById('list').parentNode; // Accesses the parent of the element with id 'list'
let children = document.getElementById('list').children; // Accesses all child elements of 'list'
let firstSibling = document.getElementById('list').nextElementSibling; // Accesses the next sibling element
```
#### Example: Changing the Text of an Element
```
<h2 id="heading">Original Heading</h2>
<script>
  let heading = document.getElementById('heading');
  heading.innerText = "Updated Heading"; // Updates the text inside the h2 element
</script>
```
#### Working with Events
You can also manipulate the DOM in response to user actions by attaching event listeners. For example:
```
document.getElementById('button').addEventListener('click', function() {
  document.getElementById('heading').innerText = "Button Clicked!";
});
```
#### Conclusion
The DOM allows you to dynamically manipulate the structure and content of web pages. It plays a crucial role in making web pages interactive by enabling JavaScript to interact with HTML and CSS. Through the DOM, you can access and change HTML elements, attributes, and styles, making it a powerful tool for web development.


## Accessing Attributes Using DOM Methods in JavaScript
To access or manipulate an HTML element's attributes, JavaScript provides several methods:

+ getAttribute():- 
To retrieve an attribute value.
+ setAttribute():-
To set a new value to an attribute.
+ removeAttribute():-
To remove an attribute from an element.

1. `getAttribute()`: Retrieve an Attribute Value
The getAttribute() method is used to get the value of a specified attribute from an HTML element.

Example:
```
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getAttribute Example</title>
</head>
<body>
    <img id="myImage" src="image.jpg" alt="Sample Image">

    <script>
        // Access the image element
        const image = document.getElementById('myImage');
        
        // Get the 'src' attribute
        let srcValue = image.getAttribute('src');
        console.log('Image source:', srcValue); // Output: 'image.jpg'

        // Get the 'alt' attribute
        let altValue = image.getAttribute('alt');
        console.log('Alt text:', altValue); // Output: 'Sample Image'
    </script>
</body>
</html>
```
#### Explanation:
We use getAttribute('src') to get the value of the src attribute, which contains the image source ("image.jpg").
We use getAttribute('alt') to get the alternative text ("Sample Image").

2. `setAttribute()`: Set a New Value to an Attribute
The setAttribute() method is used to set or update an attribute's value on an HTML element.

Example:
```
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>setAttribute Example</title>
</head>
<body>
    <img id="myImage" src="image.jpg" alt="Sample Image">

    <script>
        // Access the image element
        const image = `document.getElementById('myImage')`;
        
        // Change the 'src' attribute to a new image
        image.`setAttribute('src', 'newImage.jpg')`;
        console.log('New image source:', image.getAttribute('src')); // Output: 'newImage.jpg'

        // Update the 'alt' attribute
        image.`setAttribute('alt', 'New Image Description')`;
        console.log('New alt text:', image.getAttribute('alt')); // Output: 'New Image Description'
    </script>
</body>
</html>
```
#### Explanation:
We use setAttribute('src', 'newImage.jpg') to change the image source to "newImage.jpg".
We use setAttribute('alt', 'New Image Description') to update the alt text.

3. `removeAttribute()`: Remove an Attribute from an Element
The removeAttribute() method removes a specified attribute from an HTML element.

Example:
```
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>removeAttribute Example</title>
</head>
<body>
    <img id="myImage" src="image.jpg" alt="Sample Image">

    <script>
        // Access the image element
        const image = document.getElementById('myImage');
        
        // Remove the 'alt' attribute
        image.removeAttribute('alt');
        console.log('Alt attribute after removal:', image.getAttribute('alt')); // Output: null
    </script>
</body>
</html>
```
#### Explanation:
We use removeAttribute('alt') to remove the alt attribute from the image.
After removal, getAttribute('alt') returns null because the attribute no longer exists on the element.
##Summary:
+ `getAttribute()` retrieves the value of an existing attribute on an element.
+ `setAttribute()` adds or modifies the value of an attribute.
+ `removeAttribute()` deletes an attribute from an element, making it as if that attribute never existed.

## Accessing and Manipulating the Inline Style of an Element
You can access an element's inline styles through the style property. This allows direct manipulation of CSS properties.

Example:
```
const element = document.getElementById('myElement');
element.style.color = 'blue'; // Change text color
element.style.backgroundColor = 'yellow'; // Change background color
element.style.margin = '10px'; // Set margin
```
### Changing CSS Properties Using JavaScript
To modify CSS properties dynamically, you can manipulate the element’s style attribute, as shown below.

Example:
```
const element = document.querySelector('.myClass');
element.style.border = '1px solid black'; // Set border property
element.style.fontSize = '20px'; // Set font size
```

## Adding and Positioning Elements in the DOM
You can add new elements to the DOM and position them relative to existing elements using methods such as

+ append():
   Adds new content to the end of an element’s children.
+ prepend():
  Adds new content to the beginning of an element’s children.
+ before():
  Inserts new content immediately before the target element.
+ after():
  Inserts new content immediately after the target element.



1. `append()`: Adds Content at the End of the Target Element
The append() method is used to insert content at the end of the target element's children. It can append text, HTML, or other DOM elements.

Example:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>append() Example</title>
</head>
<body>
    <div id="container">
        <p>This is the first paragraph.</p>
    </div>

    <script>
        const container = document.getElementById('container');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph added at the end.';
        
        // Append the new paragraph at the end of the container
        container.append(newParagraph);
    </script>
</body>
</html>
```
Output:
```
<div id="container">
    <p>This is the first paragraph.</p>
    <p>This is a new paragraph added at the end.</p>
</div>
```
2. `prepend()`: Adds Content at the Beginning of the Target Element
The prepend() method inserts content at the beginning of the target element’s children.

Example:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>prepend() Example</title>
</head>
<body>
    <div id="container">
        <p>This is the first paragraph.</p>
    </div>

    <script>
        const container = document.getElementById('container');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph added at the beginning.';
        
        // Prepend the new paragraph at the beginning of the container
        container.prepend(newParagraph);
    </script>
</body>
</html>
```
Output:
```
<div id="container">
    <p>This is a new paragraph added at the beginning.</p>
    <p>This is the first paragraph.</p>
</div>
```
3. `before()`: Inserts Content Before the Target Element
The before() method inserts content immediately before the target element in the DOM, at the same level (as a sibling).

Example:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>before() Example</title>
</head>
<body>
    <div id="container">
        <p id="targetParagraph">This is the target paragraph.</p>
    </div>

    <script>
        const targetParagraph = document.getElementById('targetParagraph');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph added before the target paragraph.';
        
        // Insert the new paragraph before the target paragraph
        targetParagraph.before(newParagraph);
    </script>
</body>
</html>
```
Output:
```
<div id="container">
    <p>This is a new paragraph added before the target paragraph.</p>
    <p id="targetParagraph">This is the target paragraph.</p>
</div>
```
4. `after()`: Inserts Content After the Target Element
The after() method inserts content immediately after the target element in the DOM, at the same level (as a sibling).

Example:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>after() Example</title>
</head>
<body>
    <div id="container">
        <p id="targetParagraph">This is the target paragraph.</p>
    </div>

    <script>
        const targetParagraph = document.getElementById('targetParagraph');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph added after the target paragraph.';
        
        // Insert the new paragraph after the target paragraph
        targetParagraph.after(newParagraph);
    </script>
</body>
</html>
```
Output:
```
<div id="container">
    <p id="targetParagraph">This is the target paragraph.</p>
    <p>This is a new paragraph added after the target paragraph.</p>
</div>
```

## Events in JavaScript
Events in JavaScript are actions or occurrences that happen in the browser, such as when a user clicks a button, hovers over an element, or when a page finishes loading. These events can trigger tasks or functions to respond to user interaction.

## Handling Events in JavaScript
JavaScript allows handling various events such as clicks, double clicks, key presses, mouse movement, and more. You can listen for events and execute specific code when those events are triggered.

+ Handling Click and Double Click Events
The most common events to handle are click and double-click events:

+ click:
Fired when an element is clicked.
+ dblclick:
Fired when an element is double-clicked.
Example: Handling Click and Double Click Events
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click and Double Click Example</title>
</head>
<body>
    <button id="clickButton">Click Me</button>
    <button id="dblClickButton">Double Click Me</button>

    <script>
        const clickButton = document.getElementById('clickButton');
        const dblClickButton = document.getElementById('dblClickButton');

        // Click event handler
        clickButton.addEventListener('click', () => {
            alert('Button clicked!');
        });

        // Double-click event handler
        dblClickButton.addEventListener('dblclick', () => {
            alert('Button double-clicked!');
        });
    </script>
</body>
</html>
```
In this example:

Clicking the first button triggers an alert.
Double-clicking the second button triggers a different alert.
The Event Object in JavaScript
When an event is triggered, an event object is created that provides additional information about the event, such as:

+ `target`: The element that triggered the event.
+ `type`: The type of event (click, keypress, etc.).
+ `clientX and clientY`: The mouse coordinates relative to the browser window when the event occurred.
Example: Using the Event Object
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Object Example</title>
</head>
<body>
    <button id="infoButton">Click for Event Info</button>

    <script>
        const button = document.getElementById('infoButton');

        button.addEventListener('click', (event) => {
            console.log('Event type:', event.type); // 'click'
            console.log('Clicked element:', event.target); // <button> element
            console.log('Mouse X position:', event.clientX); // X coordinate
            console.log('Mouse Y position:', event.clientY); // Y coordinate
        });
    </script>
</body>
</html>
```
Here, we log details about the event, including the type of event, the target element, and the mouse position when the click event occurred.

## Event Handlers in JavaScript
Event handlers are functions that run when an event is triggered. These handlers are registered using `addEventListener()` or by setting properties like `onclick`.
```
element.addEventListener('click', () => {
    // Handle click event
});
Removing Event Handlers in JavaScript
To remove an event handler, you can use the `removeEventListener()` method.
```
Example: Adding and Removing an Event Handler
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Event Handler Example</title>
</head>
<body>
    <button id="clickButton">Click Me</button>

    <script>
        const button = document.getElementById('clickButton');

        const handleClick = () => {
            alert('Button clicked!');
            button.removeEventListener('click', handleClick); // Removes the event handler
        };

        // Adding the click event listener
        button.addEventListener('click', handleClick);
    </script>
</body>
</html>
```
In this example, the event handler is removed after the first click, so subsequent clicks won’t trigger the alert.

### Creating a Button to Toggle Between Dark and Light Mode
You can create a button that switches between light and dark mode by toggling a CSS class on the body element.

Example: Dark/Light Mode Toggle
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark/Light Mode Toggle</title>
    <style>
        body {
            background-color: white;
            color: black;
            transition: background-color 0.5s ease, color 0.5s ease;
        }
        body.dark-mode {
            background-color: black;
            color: white;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button id="toggleButton">Toggle Dark Mode</button>

    <script>
        const button = document.getElementById('toggleButton');
        const body = document.body;

        button.addEventListener('click', () => {
            // Toggle the 'dark-mode' class on the body element
            body.classList.toggle('dark-mode');
            
            // Update the button text based on the current mode
            if (body.classList.contains('dark-mode')) {
                button.textContent = 'Switch to Light Mode';
            } else {
                button.textContent = 'Switch to Dark Mode';
            }
        });
    </script>
</body>
</html>
```
+ How it Works:
We use the `classList.toggle()` method to add or remove the dark-mode class from the body element.
The CSS defines styles for light mode (default) and dark mode (when the dark-mode class is present).
When the button is clicked, the mode is toggled and the button text is updated accordingly.

## class , object and prototype
In JavaScript, prototypes, classes, and objects are key concepts of object-oriented programming. Let's explore each with examples.

### Objects and Prototypes
Every JavaScript object has a prototype. A prototype is an object from which other objects inherit properties.

When you create an object in JavaScript, it can inherit methods and properties from its prototype.

Example of Prototypes:
```
// Create a prototype object
let animal = {
  species: "Unknown",
  eat: function() {
    console.log(`${this.species} is eating.`);
  }
};

// Create a new object that inherits from animal
let dog = Object.create(animal);
dog.species = "Dog";

// Now dog object inherits properties and methods from animal
dog.eat();  // Output: Dog is eating.

```
Here, dog inherits the eat method from the animal prototype. Object.create(animal) sets animal as the prototype of dog. Even though dog doesn't directly define eat, it can still access it through its prototype.

### Prototypes in Functions (Function Constructors)
Before ES6 classes, JavaScript used constructor functions and prototypes to achieve inheritance and object creation.

Example using Constructor Function and Prototypes:
```
// Constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a method to Car's prototype
Car.prototype.displayInfo = function() {
  console.log(`Car: ${this.make} ${this.model}`);
};

// Creating new instances
let car1 = new Car('Toyota', 'Camry');
let car2 = new Car('Honda', 'Accord');

car1.displayInfo();  // Output: Car: Toyota Camry
car2.displayInfo();  // Output: Car: Honda Accord
```
Here, Car is a constructor function. Instances of Car (like car1 and car2) share the displayInfo method, which is defined on Car.prototype.

### Classes in ES6
In ES6, JavaScript introduced the class syntax, which is essentially syntactic sugar over the prototype-based inheritance.

Example using Classes:
```
// Define a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method of the class
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an object from the class
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);

person1.greet();  // Output: Hello, my name is John and I'm 30 years old.
person2.greet();  // Output: Hello, my name is Jane and I'm 25 years old.
```
+ Key Differences:
Prototype-based Inheritance: Objects inherit directly from other objects using prototypes.

+ `Classes:`
   ES6 classes provide a clearer syntax for working with constructor functions and prototypes. Under the hood, classes still use prototypes, but they make the code easier to write and understand.
### Class Inheritance
Classes also allow for inheritance in an easy-to-read format.

Example of Class Inheritance:
```
// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Subclass inheriting from Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Buddy');
dog.speak();  // Output: Buddy barks.
```
Here, the Dog class extends the Animal class, inheriting its properties and methods. We override the speak method to make the dog bark instead of the generic sound.

+ Summary:
Prototypes are the foundation of JavaScript's inheritance system. Objects inherit properties and methods from their prototype.
Classes in ES6 simplify object-oriented programming by providing a cleaner syntax, though they still work using prototypes behind the scenes.
Constructor functions and prototypes were used before classes for inheritance.


+ Example of a Family Class:
```
javascript
Copy code
// Define the base Person class
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Method to describe the person
  describe() {
    console.log(`Hi, I'm ${this.name}. I am a ${this.age}-year-old ${this.gender}.`);
  }
}

// Define a Parent class that extends from Person
class Parent extends Person {
  constructor(name, age, gender, job) {
    super(name, age, gender);  // Inherit properties from Person class
    this.job = job;
  }

  // Method specific to Parent
  describeJob() {
    console.log(`${this.name} works as a ${this.job}.`);
  }
}

// Define a Child class that extends from Person
class Child extends Person {
  constructor(name, age, gender, school) {
    super(name, age, gender);  // Inherit properties from Person class
    this.school = school;
  }

  // Method specific to Child
  describeSchool() {
    console.log(`${this.name} studies at ${this.school}.`);
  }
}

// Create objects representing family members
let father = new Parent('John', 45, 'Male', 'Engineer');
let mother = new Parent('Emma', 42, 'Female', 'Doctor');
let son = new Child('Jake', 12, 'Male', 'Greenwood Middle School');
let daughter = new Child('Lily', 8, 'Female', 'Greenwood Elementary School');

// Calling methods on the objects
father.describe();        // Output: Hi, I'm John. I am a 45-year-old Male.
father.describeJob();     // Output: John works as an Engineer.

mother.describe();        // Output: Hi, I'm Emma. I am a 42-year-old Female.
mother.describeJob();     // Output: Emma works as a Doctor.

son.describe();           // Output: Hi, I'm Jake. I am a 12-year-old Male.
son.describeSchool();     // Output: Jake studies at Greenwood Middle School.

daughter.describe();      // Output: Hi, I'm Lily. I am an 8-year-old Female.
daughter.describeSchool(); // Output: Lily studies at Greenwood Elementary Schoo
```

### one more example 
```
// Correct class definition with curly braces
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

// Engineer class extending Person
class Engineer extends Person {
  constructor(name, age, field) {
    // Call the parent class constructor
    super(name, age);
    this.fieldName = field;  // Correct the property name
  }

  details() {
    // Use 'this' to refer to the object's properties
    console.log(`I work in the ${this.fieldName} field. My name is ${this.name} and my age is ${this.age}`);
  }
}

// Create instances and call methods
let prachi = new Person("Prachi", "27");
prachi.info();  // Output: My name is Prachi and my age is 27

let chirag = new Engineer("Chirag", "24", "IT");
chirag.details();  // Output: I work in the IT field. My name is Chirag and my age is 24

```


###  try...catch (Error Handling)
The `try...catch` block is used to handle errors in JavaScript code. If an error occurs in the try block, it is caught and handled by the catch block, preventing the program from crashing.

Example:
```
try {
  let result = 10 / 0;  // No error here, as dividing by 0 is valid in JS
  console.log(result);

  // Let's throw an error manually
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(`Caught an error: ${error.message}`);  // Output: Caught an error: Something went wrong!
}
```

### Synchronous Programming
In synchronous programming, tasks are executed one after the other. A task must finish before the next one can start. This means the program waits for each operation to complete before moving on to the next.

### Characteristics:
+ Code runs sequentially.
+ Blocking: If one task takes time (e.g., reading a large file), the rest of the program waits until that task finishes.
+ Easier to understand but not efficient for tasks that involve waiting (e.g., network requests, database calls).
  
Example of Synchronous Code:
```
console.log("Task 1: Start");  // Executes first

function longRunningTask() {
  // Simulating a long task (blocking the code for 3 seconds)
  let start = new Date().getTime();
  while (new Date().getTime() < start + 3000);  // Blocking the program
}

longRunningTask();  // Blocking operation

console.log("Task 2: End");  // Only executes after the long task completes
```
+ Output:
```
arduino
Copy code
Task 1: Start
// (3-second delay)
Task 2: End
```
Here, the program waits for longRunningTask() to complete before moving on to the next line. This is synchronous, and while it's simple, it's inefficient for long-running tasks.

### Asynchronous Programming
In asynchronous programming, tasks can start and finish independently of each other. The program doesn't have to wait for a task to complete before starting the next one. Instead, the task runs in the background, and when it finishes, a callback or promise handles the result.

#### Characteristics:
+ Code runs non-blocking.
+ Efficient for I/O operations (e.g., file system, database, network requests).
+ Complex to manage compared to synchronous code, but much faster for tasks that involve waiting.
Example of Asynchronous Code:
```
console.log("Task 1: Start");  // Executes first

function longRunningTaskAsync(callback) {
  // Simulating an asynchronous operation using setTimeout
  setTimeout(() => {
    console.log("Long task done");
    callback();
  }, 3000);  // Non-blocking operation
}

longRunningTaskAsync(() => {
  console.log("Task 2: End");  // Executes after the async operation finishes
});

console.log("Task 3: Executed immediately");  // This runs immediately, without waiting
```
Output:
```
Task 1: Start
Task 3: Executed immediately
// (3-second delay)
Long task done
Task 2: End
```
Here, after Task 1 starts, the asynchronous function longRunningTaskAsync() runs in the background, allowing Task 3 to execute immediately. Task 2 is executed only after the asynchronous task completes.

### Key Differences:
+ `Synchronous	Asynchronous`
+ Tasks are executed one after another.	Tasks can run independently and in parallel.
+ Code execution is blocked until a task finishes.	Code execution continues while waiting for a task to complete.
+ Easier to understand and debug.	Can be more complex to manage due to callbacks, promises, etc.
+ Inefficient for tasks like I/O, network requests, or database access.	Highly efficient for tasks that involve waiting (e.g., I/O, network, or database).

Example: A loop that waits for all operations to finish before continuing.	Example: Fetching data from an API without blocking the UI.

When to Use:
+ `Synchronous:` Best for simple, linear tasks where you don’t need to wait for long-running operations.
+ `Asynchronous:` Ideal for tasks involving I/O operations, like fetching data from an API, reading/writing to a database, or user interaction on websites (to prevent blocking the UI).
+ Summary:
Synchronous is simple but blocks the entire program while a task completes.
Asynchronous allows the program to perform other tasks while waiting for a long-running task to finish, leading to better performance for certain operations.

## callback
A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. It allows you to handle asynchronous operations or sequence actions in JavaScript.

### How it Works:
+ You pass a function (the callback) into another function.
+The callback function is then called (or "called back") after the main function has finished running.
+ This pattern is commonly used for handling events or asynchronous operations like fetching data from an API, reading files, or timers.

+Basic Example of a Callback Function:
```
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  let name = "Prachi";
  callback(name);  // Calling the callback function
}

processUserInput(greet);  // Passing greet as a callback
```
Explanation:

+ The greet function takes a name and logs a greeting message.
+ The processUserInput function takes a callback function as an argument, generates a name, and then calls the callback function with the name.
+ When processUserInput(greet) is called, greet is passed as the callback, and it will be executed inside processUserInput after the name is ready.
Output:
```
Copy code
Hello, Prachi!
```
### Asynchronous Example with Callbacks:
Callbacks are commonly used to handle asynchronous code, such as when you are making an HTTP request, reading a file, or using timers.

Example using setTimeout (Asynchronous):
```
function fetchData(callback) {
  console.log("Fetching data...");
  
  setTimeout(() => {
    console.log("Data fetched");
    callback();  // Execute the callback after the data is fetched
  }, 2000);  // Simulating a 2-second delay for data fetching
}

function displayData() {
  console.log("Displaying data");
}

// Calling fetchData with displayData as the callback
fetchData(displayData);
```
+ Explanation:

fetchData simulates a data fetch operation that takes 2 seconds (using setTimeout).
After 2 seconds, the callback function (displayData) is executed.
Output:
```
kotlin
Copy code
Fetching data...
Data fetched
Displaying data
```
+ The fetchData function performs an asynchronous task (fetching data), and when it's done, it calls the displayData function, which is passed as a callback.

 ### Callback Functions in Practice:
+ `Event Handling`: Callbacks are used when handling events like button clicks or form submissions in JavaScript.
+ `Asynchronous Operations`: Callbacks handle tasks that take time (e.g., reading files, making network requests) without blocking other code execution.
Example: Callback with a Button Click Event:
```
// Define a callback function
function onClickHandler() {
  console.log("Button clicked!");
}

// Attach the callback to the click event
document.querySelector("button").addEventListener("click", onClickHandler);
In this example, the onClickHandler function is a callback that will be executed whenever the button is clicked.
```
### Advantages of Callback Functions:
+ `Asynchronous Handling`: Allows non-blocking code execution, which is crucial for handling time-consuming operations like API calls.
+ `Modularity`: You can pass different functions as callbacks to control the behavior of a function, making the code more reusable.

### explain callback function step by tep 
Basic Example of a Callback Function (Step by Step):
+ Imagine you want to cook food, and when it's ready, you want to eat the food. Here’s how it works:

+ You cook the food (this takes time).
+ After the food is ready, you can eat the food (this is what you want to do after cooking).
+ We can represent this using a callback function. The function that cooks the food will take another function as an argument — the callback function, which will be the action you take after cooking (in this case, eating the food).

Example:
```
// This is the callback function (what happens after cooking is done)
function eatFood() {
  console.log("Now, I am eating the food!");
}

// This is the main function to cook food
function cookFood(callback) {
  console.log("Cooking food...");

  // Simulate cooking time with setTimeout (cooking takes 2 seconds)
  setTimeout(() => {
    console.log("Food is ready!");
    
    // Now, call the callback function (eat the food after it's ready)
    callback();
  }, 2000);  // 2 seconds delay
}

// Call the cookFood function and pass eatFood as a callback
cookFood(eatFood);
```
### Explanation:
+ `cookFood function`: This function represents the process of cooking. It takes callback as a parameter, which is the function that will run after the food is cooked.
+ `eatFood function`: This is the callback function that represents eating the food after it is cooked. This will be executed after the food is ready.
+ `setTimeout`: This simulates the time it takes to cook the food (2 seconds). After 2 seconds, the callback function is called to "eat the food."
- What happens step by step:
- "Cooking food..." is printed first because the cooking starts.
- After 2 seconds (simulated cooking time), "Food is ready!" is printed.
- Then, the eatFood callback function is called, and "Now, I am eating the food!" is printed.
Output:
```
Cooking food...
// (2 seconds delay)
Food is ready!
Now, I am eating the food!
```
## Key Point:
+ Callback function is the action you want to perform after something else happens (like eating food after cooking).
+ You pass the eatFood function to cookFood, and cookFood will call eatFood when it’s done cooking.
Is this example easier to understand?

### but how they know what is a callback  function 

Great question! Let's break it down further and understand how JavaScript knows what a callback function is.

+ How JavaScript Recognizes a Callback Function
+ A callback function is just a regular function in JavaScript, but it becomes a callback because it's passed as an argument to another function, and then that function calls it back later.

+ The key is in how the function is used, not in its definition. Any function can be used as a callback if it's passed as an argument to another function.

### Here's the process:
+ When you pass a function (like eatFood) to another function (like cookFood), you are not calling it immediately. Instead, you are passing the reference to that function, so it can be called later.
+ The receiving function (cookFood) decides when and where to call the passed-in function.
Example Revisited:
+ Let's modify our example slightly to make it even clearer:

```
// Define a regular function, nothing special here
function eatFood() {
  console.log("Now, I am eating the food!");
}

// Define another regular function that accepts a function as an argument
function cookFood(callback) {
  console.log("Cooking food...");

  // After cooking (simulated delay), the function will "call back" the passed function
  setTimeout(() => {
    console.log("Food is ready!");
    callback();  // Call the function that was passed as the argument
  }, 2000);
}

// Passing eatFood to cookFood as a callback
cookFood(eatFood);
```
### What's happening:
+ cookFood accepts a function as an argument:

+ callback is just a variable that holds a function (in this case, it's eatFood).
+ You pass eatFood as an argument:

+ When you call cookFood(eatFood), you are telling cookFood, "Hey, when you're done cooking, run the eatFood function."
+ callback() is called:

+ Inside cookFood, after the simulated cooking is done (setTimeout), callback() is called. At this point, callback refers to the eatFood function.
So, JavaScript doesn't care what the function is called (eatFood or something else). It just knows that the function you passed (whatever it is) should be called when the cooking is done.


### Visualizing it:
+ You define a regular function (like eatFood).
+ You pass it to another function (like cookFood), but you don't call it immediately.
+ The receiving function decides when to call it. That's when it becomes a callback.
### Why Use Callbacks?
The main reason for using callbacks is to handle asynchronous operations. You want to tell the code: "Do this thing now, but when you're done, call this function back to do the next task."

+ For example, in a website:

+ `Callback`: You want to fetch data from a server, but you don’t want to freeze the whole page while waiting for the data. Instead, you give the browser a callback function: "When the data is ready, run this function to display it."
## Summary:
+ Any function can be used as a callback; it's not a special type of function.
+ A function becomes a callback when it's passed to another function, and that other function decides when to "call it back".
+ JavaScript doesn't "know" which function is a callback in advance — it simply runs the function that was passed to it when it's ready.



