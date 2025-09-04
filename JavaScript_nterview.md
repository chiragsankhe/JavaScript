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
