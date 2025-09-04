📘 JavaScript Interview Question Bank (Topic-wise)
1. Basics of JavaScript

Q1. What is JavaScript?

Q2. Difference between Java and JavaScript?

Q3. Why is JavaScript called a client-side scripting language?

Q4. What are the features of JavaScript?

Q5. What are the limitations of JavaScript?

Q6. Difference between var, let, and const? (with examples)

Q7. What are primitive and non-primitive data types in JavaScript?

Q8. Explain type coercion in JavaScript.

Q9. What is NaN in JavaScript?

Q10. How does JavaScript execution work? (Call stack + JS Engine)

2. Operators & Data Types

Q11. Difference between == and ===?

Q12. What are truthy and falsy values in JavaScript?

Q13. Explain the difference between null, undefined, and NaN.

Q14. What are JavaScript template literals?

Q15. Explain spread and rest operators with examples.

Q16. What is destructuring assignment in JS?

3. Functions & Scope

Q17. What is the difference between function declaration and function expression?

Q18. What are arrow functions?

Q19. What is IIFE (Immediately Invoked Function Expression)?

Q20. Explain scope and lexical scope in JavaScript.

Q21. What is hoisting in JavaScript?

Q22. What is the difference between global and block scope?

4. DOM Manipulation

Q23. What is the DOM in JavaScript?

Q24. How do you select elements in JavaScript?

Q25. Difference between innerHTML, innerText, and textContent.

Q26. How do you create, add, and remove HTML elements dynamically using JavaScript?

Q27. What is event bubbling and event capturing?

Q28. How does event delegation work?

5. Asynchronous JavaScript

Q29. What is the difference between synchronous and asynchronous JavaScript?

Q30. What are callbacks in JavaScript?

Q31. What are promises in JavaScript? (with example)

Q32. What is async/await and how is it better than promises?

Q33. Difference between setTimeout, setInterval, and requestAnimationFrame.

Q34. Explain the JavaScript Event Loop.

6. Objects & Arrays

Q35. How to clone an object in JavaScript?

Q36. Difference between deep copy and shallow copy.

Q37. How to merge two objects in JavaScript?

Q38. How to remove duplicates from an array in JavaScript?

Q39. Difference between forEach, map, filter, and reduce.

Q40. What are object destructuring and array destructuring?

7. ES6+ (Modern JavaScript)

Q41. What are the new features introduced in ES6?

Q42. Explain default parameters in functions.

Q43. What are modules in JavaScript (import & export)?

Q44. What are generators in JavaScript?

Q45. What are symbols in JavaScript?

8. Error Handling

Q46. How do you handle errors in JavaScript?

Q47. Difference between try…catch and throw in JavaScript.

Q48. What are JavaScript runtime errors vs syntax errors?

9. Advanced Topics

Q49. What is closure in JavaScript? (with example)

Q50. Explain currying in JavaScript.

Q51. What is memoization?

Q52. What is debouncing and throttling? (with example)

Q53. Difference between prototype and proto.

Q54. Explain call, apply, and bind methods.

Q55. What are higher-order functions in JavaScript?

10. JavaScript Interview Coding Questions

Reverse a string without using .reverse()

Find the largest and smallest number in an array.

Remove duplicates from an array.

Implement a custom debounce function.

Write a polyfill for Array.map().

Implement a simple promise.

Explain flattening a nested array.
---
---
---

# JavaScript Interview Questions & Answers — Basics

## Q1. What is JavaScript?
JavaScript is a **high-level**, **interpreted**, **lightweight**, and **dynamic** programming language used to create **interactive** and **dynamic** web pages.  
It is one of the **core technologies** of the web along with **HTML** and **CSS**.

**Example:**
```javascript
console.log("Hello Chirag!"); // Prints message to console
```

---

## Q2. Difference between Java and JavaScript

| **Aspect**         | **Java**                              | **JavaScript**                     |
|---------------------|--------------------------------------|-------------------------------------|
| **Type**           | Object-Oriented Programming Language | Scripting Language                |
| **Compilation**    | Compiled → Bytecode (runs on JVM)     | Interpreted → Runs in browser      |
| **Usage**          | Backend, Android, Desktop Apps       | Frontend + Backend (Node.js)       |
| **Typing**         | Statically Typed                     | Dynamically Typed                 |
| **Relation**       | No relation, just marketing naming   | No relation                        |

> Java and JavaScript are **not related** despite the similar names.

---

## Q3. Why is JavaScript called a client-side scripting language?
Because JavaScript code runs **inside the browser** on the **client’s machine**, not the server.  
It allows developers to manipulate HTML and CSS directly.

**Example:**
```javascript
document.getElementById("demo").innerHTML = "Client-side executed!";
```

---

## Q4. What are the features of JavaScript?
- ✅ **Lightweight & Fast** → Runs directly in browsers.
- ✅ **Cross-platform** → Works on all major browsers.
- ✅ **Event-driven** → Responds to user actions.
- ✅ **Versatile** → Used in **frontend**, **backend**, **mobile**, and **desktop apps**.
- ✅ **Object-oriented** → Uses **prototypes**.
- ✅ **Asynchronous** → Handles API calls without blocking UI.

---

## Q5. What are the limitations of JavaScript?
- ❌ **Security** → JS code is visible and can be tampered.
- ❌ **No direct file access** for security reasons.
- ❌ **Single-threaded** → Executes one task at a time.
- ❌ **Browser dependency** → Behavior may vary.
- ❌ **Not suitable for heavy computation**.

---

## Q6. Difference between `var`, `let`, and `const`

| Feature          | **var**                | **let**                   | **const**               |
|-------------------|------------------------|----------------------------|--------------------------|
| **Scope**         | Function-scoped        | Block-scoped              | Block-scoped             |
| **Re-declaration**| ✅ Allowed            | ❌ Not allowed             | ❌ Not allowed           |
| **Re-assignment** | ✅ Allowed            | ✅ Allowed                | ❌ Not allowed          |
| **Hoisting**      | ✅ Hoisted (undefined) | ✅ Hoisted (TDZ*)         | ✅ Hoisted (TDZ*)        |

> **TDZ** = Temporal Dead Zone

**Example:**
```javascript
var x = 10;
var x = 20; // ✅ Allowed

let y = 10;
// let y = 20; ❌ Error
y = 30; // ✅ Allowed

const z = 10;
// z = 20; ❌ Error
```

---

## Q7. What are primitive and non-primitive data types in JavaScript?

### **Primitive Data Types** (Immutable)
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

### **Non-Primitive Data Types** (Mutable)
- Objects
- Arrays
- Functions

**Example:**
```javascript
let arr = [1, 2, 3];
let obj = { name: "Chirag" };
```

---

## Q8. Explain type coercion in JavaScript
Type coercion is the **automatic** or **explicit** conversion of one data type into another.

### **Implicit Coercion**
```javascript
console.log("5" + 2);  // "52" → Number to String
console.log("5" - 2);  // 3    → String to Number
```

### **Explicit Coercion**
```javascript
console.log(Number("123")); // 123
console.log(String(456));   // "456"
```

---

## Q9. What is NaN in JavaScript?
`NaN` stands for **Not-a-Number**. It represents invalid numeric results.

**Example:**
```javascript
console.log(0 / 0);       // NaN
console.log("abc" * 2);   // NaN
console.log(isNaN("hi")); // true
```

> **Note:** `typeof NaN` → `"number"`.

---

## Q10. How does JavaScript execution work? (Call Stack + JS Engine)
JavaScript runs on a **single-threaded** engine, meaning one task at a time.

### **Steps:**
1. **Parsing** → Code is parsed.
2. **Memory Creation Phase** → Variables & functions stored.
3. **Execution Phase** → Code runs line by line.

### **Call Stack Example**
```javascript
function greet() {
  console.log("Hello");
}
function start() {
  greet();
  console.log("Welcome Chirag!");
}
start();
```
**Call Stack Order:**
```
start() → greet() → console.log → pop → console.log → pop → empty
```
---  

# 🟢 JavaScript Interview Q&A — Operators & Data Types

## **Q11. Difference between `==` and `===` in JavaScript**

| **Aspect**       | **`==` (Loose Equality)**    | **`===` (Strict Equality)** |
|------------------|------------------------------|-----------------------------|
| **Comparison**   | Compares **values only**     | Compares **values + types** |
| **Type Coercion**| ✅ Performs type conversion   | ❌ No type conversion       |
| **Use Case**     | When types can be different  | When both must match        |

**Example:**
```javascript
console.log(5 == "5");  // true  → converts string to number
console.log(5 === "5"); // false → types differ
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

---

## **Q12. What are truthy and falsy values in JavaScript?**

In JavaScript, some values **evaluate to false** in boolean contexts (**falsy**), and everything else is **truthy**.

### **Falsy Values** 😵
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### **Truthy Values** 😎
- `"hello"`
- `1`, `-1`, `3.14`
- `[]` (empty array)
- `{}` (empty object)
- `function(){}`

**Example:**
```javascript
if ("Chirag") console.log("Truthy!"); // ✅ Executes
if (0) console.log("Falsy!");        // ❌ Skipped
```

---

## **Q13. Difference between `null`, `undefined`, and `NaN`**

| **Aspect**   | **null**                     | **undefined**                   | **NaN**             |
|-------------|-------------------------------|---------------------------------|---------------------|
| **Meaning** | Intentional absence of value | Declared but not assigned       | Invalid number      |
| **Type**    | `object` (bug)               | `undefined`                     | `number`            |
| **Example** | `let x = null;`              | `let y; console.log(y);`        | `"abc" * 2 // NaN`  |

**Example:**
```javascript
let x = null;
let y;
let z = "abc" * 2;

console.log(x); // null
console.log(y); // undefined
console.log(z); // NaN
```

---

## **Q14. What are JavaScript template literals?**

Template literals (introduced in **ES6**) allow:
- **String interpolation**
- **Multi-line strings**

**Syntax:** Use **backticks** `` ` ``

**Example:**
```javascript
const name = "Chirag";
const age = 22;

console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
// Hello, my name is Chirag and I'm 22 years old

console.log(`This is
a multi-line
string!`);
```

---

## **Q15. Explain spread and rest operators with examples**

### **1. Spread Operator (`...`)**
Used to **expand** arrays, objects, or strings.

```javascript
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

let obj = {name: "Chirag", age: 22};
let newObj = {...obj, country: "India"};
console.log(newObj); // {name: "Chirag", age: 22, country: "India"}
```

---

### **2. Rest Operator (`...`)**
Used to **collect multiple values** into a single variable.

```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## **Q16. What is destructuring assignment in JavaScript?**

Destructuring allows you to **unpack values** from arrays or objects into separate variables.

### **Array Destructuring**
```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### **Object Destructuring**
```javascript
const user = { name: "Chirag", age: 22 };
const { name, age } = user;

console.log(name); // Chirag
console.log(age);  // 22
```

### **Default Values**
```javascript
const [x, y = 5] = [10];
console.log(x, y); // 10 5
```
---

# 🟢 JavaScript Interview Q&A — Functions & Scope

## **Q17. Difference between function declaration and function expression**

| **Aspect**               | **Function Declaration**         | **Function Expression**         |
|--------------------------|-----------------------------------|----------------------------------|
| **Definition**           | Defines a named function         | Assigns a function to a variable |
| **Hoisting**             | ✅ Hoisted (can be called before definition) | ❌ Not hoisted (must define first) |
| **Syntax**               | `function add(a,b){...}`         | `const add = function(a,b){...}` |

**Example:**
```javascript
// Function Declaration
console.log(sum(5, 3)); // ✅ Works due to hoisting
function sum(a, b) {
  return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(5, 3)); // ✅ Works
```

---

## **Q18. What are arrow functions?**

Arrow functions (introduced in **ES6**) provide a shorter syntax for writing functions and **do not bind their own `this`**.

**Syntax:**
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

**Key Features:**
- Shorter syntax
- No own `this` → takes `this` from its surrounding scope
- Cannot be used as constructors

**Example showing `this` behavior:**
```javascript
const obj = {
  value: 10,
  normalFunc: function() {
    console.log(this.value); // 10
  },
  arrowFunc: () => {
    console.log(this.value); // undefined (takes `this` from outer scope)
  }
};
obj.normalFunc();
obj.arrowFunc();
```

---

## **Q19. What is IIFE (Immediately Invoked Function Expression)?**

An **IIFE** is a function that executes immediately after it is defined.

**Syntax:**
```javascript
(function() {
  console.log("IIFE executed!");
})(); // Output: IIFE executed!
```

**Use Cases:**
- Avoids polluting the global scope
- Creates a private scope

**Example:**
```javascript
const counter = (function() {
  let count = 0;
  return function() {
    return ++count;
  };
})();

console.log(counter()); // 1
console.log(counter()); // 2
```

---

## **Q20. Explain scope and lexical scope in JavaScript**

### **Scope**
Scope defines **where variables are accessible**.

- **Global Scope** → Accessible everywhere
- **Function Scope** → Accessible only inside the function
- **Block Scope** → `let` & `const` variables are restricted to `{}` blocks

### **Lexical Scope**
Inner functions can access variables defined in their **outer functions**.

**Example:**
```javascript
function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar); // ✅ Can access outerVar
  }
  inner();
}
outer();
```

---

## **Q21. What is hoisting in JavaScript?**

**Hoisting** is JavaScript's behavior of **moving variable and function declarations to the top** of their scope during compilation.

### **Function Hoisting**
```javascript
sayHello(); // ✅ Works due to hoisting
function sayHello() {
  console.log("Hello Chirag!");
}
```

### **Variable Hoisting**
```javascript
console.log(a); // undefined (not ReferenceError)
var a = 10;

// But `let` and `const` are not hoisted the same way:
console.log(b); // ❌ ReferenceError
let b = 20;
```

---

## **Q22. Difference between global scope and block scope**

| **Aspect**         | **Global Scope**         | **Block Scope**            |
|---------------------|-------------------------|-----------------------------|
| **Definition**     | Accessible everywhere   | Accessible only within `{}` |
| **Declared With**  | `var` (before ES6)       | `let` & `const` (ES6+)      |
| **Example**        |                         |                             |

**Example:**
```javascript
// Global Scope
var globalVar = "I am global";
console.log(globalVar); // ✅ Accessible

// Block Scope
if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar); // ✅ Accessible
}
console.log(blockVar); // ❌ ReferenceError
```
---

# 🟢 JavaScript Interview Q&A — Arrays & Functions (Advanced)

---

## **1. Arrays in JavaScript**

### **Q23. How to declare arrays in JavaScript?**

**Ways to declare arrays:**
```javascript
// Array literal (most common)
const arr1 = [1, 2, 3];

// Using new Array()
const arr2 = new Array(1, 2, 3);

// Empty array
const arr3 = [];

console.log(arr1, arr2, arr3);
```

---

### **Q24. Difference between array literal and `new Array()`?**

| **Aspect**    | **Array Literal** | **new Array()** |
|--------------|-------------------|-----------------|
| **Syntax**   | `const arr = [1,2];` | `const arr = new Array(1,2);` |
| **Empty Array** | `[]` | `new Array(5)` → creates array of length 5 |
| **Preferred** | ✅ Yes | ❌ Use less often |

**Example:**
```javascript
const arr1 = [5];       // [5]
const arr2 = new Array(5); // [empty × 5]
console.log(arr1, arr2);
```

---

### **Q25. How to check if a variable is an array?**

```javascript
const arr = [1, 2, 3];
console.log(Array.isArray(arr));  // ✅ true
console.log(arr instanceof Array); // ✅ true
console.log(typeof arr);         // ❌ "object"
```

---

### **Q26. How does JavaScript store arrays internally?**

- JavaScript arrays are **objects** with **integer-based keys**.
- Internally stored as **dynamic objects**, not fixed-size arrays like C++/Java.

```javascript
const arr = [1, 2, 3];
console.log(typeof arr); // "object"
```

---

## **2. Array Methods**

### **Q27. Explain `push()`, `pop()`, `shift()`, and `unshift()`**

| **Method**   | **Action**          | **Returns** |
|-------------|---------------------|-------------|
| `push()`    | Adds to **end**      | New length |
| `pop()`     | Removes from **end** | Removed element |
| `shift()`   | Removes from **start** | Removed element |
| `unshift()` | Adds to **start**    | New length |

**Example:**
```javascript
const arr = [1, 2];
arr.push(3);   // [1, 2, 3]
arr.pop();     // [1, 2]
arr.unshift(0);// [0, 1, 2]
arr.shift();   // [1, 2]
```

---

### **Q28. Difference between `slice()` and `splice()`**

| **Aspect** | **slice()** | **splice()** |
|-----------|------------|-------------|
| **Purpose** | Returns a copy | Modifies the original |
| **Mutates** | ❌ No | ✅ Yes |
| **Syntax** | `arr.slice(start, end)` | `arr.splice(start, count, newItems)` |

**Example:**
```javascript
const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.splice(1, 2)); // [2, 3] → arr becomes [1, 4]
```

---

### **Q29. Difference between `map()`, `filter()`, and `reduce()`**

| **Method** | **Purpose** | **Returns** |
|-----------|------------|-------------|
| `map()`   | Transform each element | New array |
| `filter()`| Select elements matching condition | New array |
| `reduce()`| Reduce array to single value | Any type |

**Example:**
```javascript
const arr = [1, 2, 3, 4];
console.log(arr.map(n => n * 2)); // [2, 4, 6, 8]
console.log(arr.filter(n => n % 2 === 0)); // [2, 4]
console.log(arr.reduce((sum, n) => sum + n, 0)); // 10
```

---

### **Q30. `forEach()` vs `map()`**

| **Aspect** | **forEach()** | **map()** |
|-----------|---------------|-----------|
| **Return** | ❌ undefined | ✅ New array |
| **Use Case** | Only iterate | Transform data |

```javascript
const nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2)); // Just logs
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

---

### **Q31. How to flatten a nested array in JavaScript?**

```javascript
const arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // [1, 2, 3, 4]
```

---

### **Q32. How to remove duplicates from an array?**

```javascript
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]
```

---

## **3. Advanced Array Concepts**

### **Q33. Difference between shallow copy and deep copy**

| **Type** | **Definition** | **Methods** |
|---------|---------------|-------------|
| **Shallow Copy** | Copies top-level values only | `slice()`, `concat()`, spread |
| **Deep Copy** | Copies nested objects too | `structuredClone()`, recursion |

---

### **Q34. Spread operator to clone arrays**

```javascript
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone);
```

---

### **Q35. Difference between `find()` and `filter()`**

| **Aspect** | **find()** | **filter()** |
|-----------|------------|--------------|
| **Return** | First matching element | All matching elements |
| **Return Type** | Single value | Array |

```javascript
const nums = [1, 2, 3, 4];
console.log(nums.find(n => n > 2)); // 3
console.log(nums.filter(n => n > 2)); // [3, 4]
```

---

### **Q36. What is `Array.from()` and `Array.of()`?**

```javascript
console.log(Array.from("hello")); // ['h','e','l','l','o']
console.log(Array.of(1, 2, 3));   // [1, 2, 3]
```

---

## **4. Functions — Advanced Interview Questions**

### **Q37. What are higher-order functions?**

Functions that **take other functions as arguments** or **return functions**.

```javascript
function greet(name) {
  return () => console.log(`Hello, ${name}`);
}
const sayHi = greet("Chirag");
sayHi(); // Hello, Chirag
```

---

### **Q38. What are callback functions?**

A function passed as an **argument** to another function.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}
fetchData(console.log); // Data fetched!
```

---

### **Q39. What is a closure?**

A closure is a function that **remembers variables** from its **outer scope**.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

### **Q40. What is function currying?**

Transforming a function with **multiple arguments** into a **series of functions**.

```javascript
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6
```

---

### **Q41. What is memoization?**

Memoization caches function results to **improve performance**.

```javascript
function fibonacci(n, cache = {}) {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  cache[n] = fibonacci(n-1, cache) + fibonacci(n-2, cache);
  return cache[n];
}
console.log(fibonacci(10)); // 55
```

---

### **Q42. Difference between `call()`, `apply()`, and `bind()`**

| **Method** | **Usage** | **Arguments** |
|-----------|-----------|---------------|
| `call()`  | Calls immediately | Arguments passed **individually** |
| `apply()` | Calls immediately | Arguments passed as **array** |
| `bind()`  | Returns new function | Arguments passed individually |

**Example:**
```javascript
function greet(msg) {
  console.log(`${msg}, ${this.name}`);
}
const user = { name: "Chirag" };

greet.call(user, "Hello");       // Hello, Chirag
greet.apply(user, ["Hi"]);       // Hi, Chirag
const bound = greet.bind(user, "Hey");
bound();                         // Hey, Chirag
```
---


# 🟢 JavaScript Interview Q&A — DOM Manipulation

---

## **Q43. What is the DOM in JavaScript?**

**DOM (Document Object Model)** is a programming interface for HTML and XML documents. It represents the structure of a webpage as a **tree of objects**, allowing JavaScript to manipulate elements, styles, and content dynamically.

**Example:**
```javascript
console.log(document.title); // Prints the page title
console.log(document.body);  // Accesses the <body> element
```

---

## **Q44. How do you select elements in JavaScript?**

There are several methods to **select HTML elements**:

```javascript
// By ID
const title = document.getElementById("title");

// By class name
const items = document.getElementsByClassName("item");

// By tag name
const paragraphs = document.getElementsByTagName("p");

// Using query selectors (most recommended)
const btn = document.querySelector(".btn");     // First matching element
const allBtns = document.querySelectorAll(".btn"); // All matching elements
```

✅ **Best Practice** → Use `querySelector` and `querySelectorAll` as they are **flexible** and **modern**.

---

## **Q45. Difference between `innerHTML`, `innerText`, and `textContent`**

| **Property**     | **Description**                     | **Keeps HTML tags?** | **Includes hidden text?** |
|-------------------|-----------------------------------|------------------------|-----------------------------|
| `innerHTML`       | Returns/sets HTML **with tags**    | ✅ Yes | ✅ Yes |
| `innerText`       | Returns visible text only          | ❌ No  | ❌ No |
| `textContent`     | Returns all text (including hidden)| ❌ No  | ✅ Yes |

**Example:**
```html
<p id="demo"><b>Hello</b> World!</p>
```
```javascript
const demo = document.getElementById("demo");
console.log(demo.innerHTML);   // "<b>Hello</b> World!"
console.log(demo.innerText);   // "Hello World!"
console.log(demo.textContent); // "Hello World!"
```

---

## **Q46. How do you create, add, and remove HTML elements dynamically using JavaScript?**

### **Creating and Adding Elements**
```javascript
const div = document.createElement("div");
div.textContent = "Hello Chirag!";
div.classList.add("box");
document.body.appendChild(div);
```

### **Removing Elements**
```javascript
const element = document.getElementById("demo");
element.remove();  // Modern way
// OR
element.parentNode.removeChild(element); // Older way
```

---

## **Q47. What is event bubbling and event capturing?**

When an event occurs on an element, it **propagates** in two possible phases:

| **Phase**       | **Description** |
|------------------|------------------|
| **Event Bubbling** (default) | The event **starts from the target** element and bubbles **up** to its ancestors. |
| **Event Capturing** | The event **starts from the root** and **trickles down** to the target element. |

**Example:**
```javascript
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
```
- **Default behavior** → Bubbling (`child → parent → document`)
- To enable capturing:
```javascript
element.addEventListener("click", handler, true);
```

---

## **Q48. How does event delegation work?**

**Event delegation** is a technique where we attach a **single event listener** to a **parent element** instead of multiple child elements.  
It works because of **event bubbling**.

**Example:**
```html
<ul id="list">
  <li>Apple</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>
```
```javascript
document.getElementById("list").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("You clicked:", event.target.textContent);
  }
});
```

✅ **Why use it?**
- Better **performance** (fewer listeners)
- Handles **dynamic elements** automatically

---

# 🟢 JavaScript Interview Q&A — Objects & Arrays

---

## **Q55. How to clone an object in JavaScript?**

There are multiple ways to **clone (copy)** an object:

### **1. Using Spread Operator (Shallow Copy)**
```javascript
const obj = { name: "Chirag", age: 22 };
const clone = { ...obj };

console.log(clone); // { name: "Chirag", age: 22 }
```

### **2. Using Object.assign() (Shallow Copy)**
```javascript
const obj = { name: "Chirag", age: 22 };
const clone = Object.assign({}, obj);

console.log(clone); // { name: "Chirag", age: 22 }
```

### **3. Using JSON Methods (Deep Copy, but limited)**
```javascript
const obj = { name: "Chirag", skills: ["JS", "React"] };
const deepClone = JSON.parse(JSON.stringify(obj));

console.log(deepClone); // { name: "Chirag", skills: ["JS", "React"] }
```

### **4. Using Structured Clone (Best Way)**
```javascript
const obj = { name: "Chirag", skills: ["JS", "React"] };
const deepClone = structuredClone(obj);

console.log(deepClone); // { name: "Chirag", skills: ["JS", "React"] }
```

---

## **Q56. Difference between deep copy and shallow copy**

| **Aspect**         | **Shallow Copy**                          | **Deep Copy**                          |
|---------------------|----------------------------------------|---------------------------------------|
| **Definition**      | Copies only **top-level properties**.   | Copies **nested objects** as well.   |
| **Effect**          | Nested objects **share the same reference**. | Nested objects are **fully cloned**. |
| **Methods**         | Spread (`...`), `Object.assign()`       | `JSON.parse(JSON.stringify())`, `structuredClone()` |

**Example:**
```javascript
const obj1 = { name: "Chirag", address: { city: "Boisar" } };

// Shallow Copy
const shallow = { ...obj1 };
shallow.address.city = "Mumbai";
console.log(obj1.address.city); // "Mumbai" ❌

// Deep Copy
const deep = JSON.parse(JSON.stringify(obj1));
deep.address.city = "Pune";
console.log(obj1.address.city); // "Mumbai" ✅
```

---

## **Q57. How to merge two objects in JavaScript?**

### **1. Using Spread Operator (Recommended)**
```javascript
const obj1 = { name: "Chirag" };
const obj2 = { age: 22 };
const merged = { ...obj1, ...obj2 };

console.log(merged); // { name: "Chirag", age: 22 }
```

### **2. Using Object.assign()**
```javascript
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { name: "Chirag", age: 22 }
```

---

## **Q58. How to remove duplicates from an array in JavaScript?**

### **1. Using Set (Recommended)**
```javascript
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4, 5]
```

### **2. Using filter() and indexOf()**
```javascript
const uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
```

### **3. Using reduce()**
```javascript
const uniqueArr = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);

console.log(uniqueArr); // [1, 2, 3, 4, 5]
```

---

## **Q59. Difference between forEach, map, filter, and reduce**

| **Method**    | **Returns**          | **Purpose**                        | **Modifies Original Array?** |
|--------------|----------------------|----------------------------------|-------------------------------|
| `forEach`    | `undefined`          | Loops through elements.          | ❌ No |
| `map`        | **New array**        | Transforms each element.         | ❌ No |
| `filter`     | **New array**        | Filters elements based on a condition. | ❌ No |
| `reduce`     | **Single value**     | Reduces array to a single result. | ❌ No |

**Example:**
```javascript
const arr = [1, 2, 3, 4];

arr.forEach(num => console.log(num * 2));      // 2 4 6 8
console.log(arr.map(num => num * 2));          // [2, 4, 6, 8]
console.log(arr.filter(num => num > 2));       // [3, 4]
console.log(arr.reduce((sum, num) => sum + num, 0)); // 10
```

---

## **Q60. What are object destructuring and array destructuring?**

### **Object Destructuring**
```javascript
const user = { name: "Chirag", age: 22 };
const { name, age } = user;

console.log(name); // Chirag
console.log(age);  // 22
```

### **Array Destructuring**
```javascript
const numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

### **With Default Values**
```javascript
const [x = 1, y = 2] = [10];
console.log(x); // 10
console.log(y); // 2
```

---


# 🟢 JavaScript Interview Q&A — ES6+, Error Handling & Advanced Topics

---

## **ES6+ (Modern JavaScript)**

### **Q61. What are the new features introduced in ES6?**

Some key **ES6 features**:
- `let` & `const`
- Template literals
- Default parameters
- Arrow functions
- Destructuring (arrays & objects)
- Spread & rest operators
- Modules (`import` & `export`)
- Classes
- Promises
- Symbols
- Generators

---

### **Q62. Explain default parameters in functions.**

Default parameters allow you to **set default values** for function arguments.

**Example:**
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();           // Hello, Guest!
greet("Chirag");   // Hello, Chirag!
```

---

### **Q63. What are modules in JavaScript (import & export)?**

Modules allow you to **split code into multiple files** and **reuse** them.

**Example:**  
`math.js`
```javascript
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

`app.js`
```javascript
import { add, sub } from './math.js';

console.log(add(5, 3)); // 8
console.log(sub(5, 3)); // 2
```

---

### **Q64. What are generators in JavaScript?**

Generators are **special functions** that can **pause** and **resume** execution using `yield`.

**Example:**
```javascript
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = counter();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

---

### **Q65. What are symbols in JavaScript?**

- A `Symbol` is a **unique and immutable** primitive value.
- Commonly used as **object property keys** to avoid conflicts.

**Example:**
```javascript
const id = Symbol("id");
const user = { name: "Chirag", [id]: 123 };

console.log(user[id]); // 123
```

---

## **Error Handling**

### **Q66. How do you handle errors in JavaScript?**

We use **try...catch...finally**:

```javascript
try {
  let result = JSON.parse("{ invalid json }");
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Always executed");
}
```

---

### **Q67. Difference between try…catch and throw in JavaScript**

| **Aspect**       | **try...catch**             | **throw**                      |
|-------------------|-----------------------------|--------------------------------|
| **Purpose**       | Handles runtime errors      | Manually throws errors         |
| **Usage**         | Wrap risky code             | Used inside `try` or functions |

**Example:**
```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero!");
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.error(e.message); // Division by zero!
}
```

---

### **Q68. What are JavaScript runtime errors vs syntax errors?**

| **Type**      | **When it occurs**           | **Example**         |
|--------------|------------------------------|----------------------|
| **Syntax**   | During parsing               | `const = 5` ❌ |
| **Runtime**  | During execution             | `undefinedFunc()` ❌ |

---

## **Advanced Topics**

### **Q69. What is closure in JavaScript? (with example)**

A **closure** is formed when an **inner function** accesses variables from its **outer function** even after the outer function has returned.

**Example:**
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

### **Q70. Explain currying in JavaScript.**

**Currying** transforms a function with **multiple arguments** into a **series of functions** taking one argument each.

**Example:**
```javascript
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6
```

---

### **Q71. What is memoization?**

**Memoization** is a technique to **cache function results** to improve performance.

**Example:**
```javascript
function memoize(fn) {
  const cache = {};
  return function(num) {
    if (cache[num]) return cache[num];
    const result = fn(num);
    cache[num] = result;
    return result;
  };
}

const square = memoize(x => x * x);
console.log(square(4)); // 16 (calculated)
console.log(square(4)); // 16 (cached)
```

---

### **Q72. What is debouncing and throttling? (with example)**

#### **Debouncing** → Delays execution until user stops triggering events.

```javascript
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resized!");
}, 500));
```

#### **Throttling** → Ensures function runs **at most once** in a given time.

```javascript
function throttle(fn, limit) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      fn.apply(this, args);
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Scrolled!");
}, 500));
```

---

### **Q73. Difference between prototype and __proto__**

| **Aspect**   | **prototype**                     | **__proto__**                |
|-------------|-----------------------------------|-------------------------------|
| **Type**    | Property of **constructor**        | Property of **object**        |
| **Usage**   | Used to define shared methods      | Points to constructor's prototype |
| **Example** | `Function.prototype`               | `obj.__proto__`               |

**Example:**
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};

const chirag = new Person("Chirag");
chirag.greet(); // Hello Chirag

console.log(chirag.__proto__ === Person.prototype); // true
```

---

### **Q74. Explain call, apply, and bind methods.**

| **Method** | **Usage**                | **Arguments**                 |
|-----------|--------------------------|--------------------------------|
| `call()`  | Calls function immediately | Pass args **individually**    |
| `apply()` | Calls function immediately | Pass args as **array**        |
| `bind()`  | Returns **new function**   | Pass args later               |

**Example:**
```javascript
function greet(city, country) {
  console.log(`Hello ${this.name} from ${city}, ${country}`);
}

const user = { name: "Chirag" };

greet.call(user, "Mumbai", "India");
greet.apply(user, ["Mumbai", "India"]);
const boundGreet = greet.bind(user, "Mumbai", "India");
boundGreet();
```

---

### **Q75. What are higher-order functions in JavaScript?**

A **higher-order function** is a function that:
- Takes another function as an argument, OR
- Returns another function.

**Example:**
```javascript
function higherOrder(fn) {
  return function(x) {
    return fn(x) * 2;
  };
}

const double = higherOrder(x => x + 5);
console.log(double(10)); // 30
```

---
