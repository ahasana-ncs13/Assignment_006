1) What is the difference between var, let, and const?
Ans:
var :
  1.Function-scoped
  2.Re-declaration allowed in the same scope
  3.Re-assignment allowed
  4.initialized with undefined
let:
  1.Block-scoped
  2.Re-declaration not allowed in the same scope
  3.Re-assignment allowed
  4.Hoisted but not initialized
const:
  1.Block-scoped
  2.Re-declaration not allowed
  3.value is fixed
  4.Same as let

2) What is the difference between map(), forEach(), and filter()?
Ans:
forEach():
  1.Loops through each element
  2.Returns undefined
map():
  1.Transforms each element
  2.Returns New array
filter():
  1.Filters elements based on condition
  2.Returns New array
3) What are arrow functions in ES6?
Ans: Arrow functions are a shorter syntax for writing functions.
Normal function
  function add(a, b) {
      return a + b;
    }
Arrow function
   const addArrow = (a, b) => a + b;    
 
4) How does destructuring assignment work in ES6?
Ans:
  Destructuring lets  unpack values from arrays or objects into variables.

Array destructuring:
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);

Object destructuring:
let person = { name: "Nusrat", age: 20 };
let { name, age } = person;
console.log(name, age); 

5) Explain template literals in ES6. How are they different from string concatenation?
Ans:
Template literals let create strings with backticks (`) and support:
  1.Multi-line strings
  2.Variable interpolation(${} syntax)
Difference:
  1.Concatenation uses +, template literals use ${}.
  2.Template literals allow multi-line strings easily

example :

let name = "Nusrat";
let age = 20;

Normal string concatenation
let msg1 = "My name is " + name + " and I am " + age + " years old.";

Template literal
let msg2 = `My name is ${name} and I am ${age} years old.`;

