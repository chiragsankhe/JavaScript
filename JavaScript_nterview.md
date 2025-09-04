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

