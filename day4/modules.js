//  What Are Modules?
// A module is simply a file that contains reusable code.
// You can export things from one file and import them into another.

// Just like you reuse kitchen items in different recipes, modules help you reuse code without rewriting.

//  1. Import using require() (CommonJS)
//  What?
// require() is the built-in function in Node.js to import modules.

// Used in CommonJS module system (default in Node.js).

//  Example:
//  math.js

// function add(a, b) {
//   return a + b;
// }

// module.exports = add;

// ➤ app.js

// const add = require('./math');
// console.log(add(5, 3)); // Output: 8
//  Easy, fast, widely supported in Node.js.

//  2. Export using module.exports
//  What?
// You can export a function, object, class, or multiple values from a file.



// module.exports = function greet(name) {
//   return `Hello, ${name}`;
// };
//  Exporting Multiple Items:

// function add(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }

// module.exports = { add, multiply };
//  3. Intro to ES Modules (import, export)
//  What?
// ES Modules is the modern way to organize code in JavaScript (browser + Node).

// Uses import and export keywords.

// Supported natively in browsers and from Node v12+ (with .mjs or "type": "module" in package.json).

// === Example (ES Modules):
// => math.js

// export function add(a, b) {
//   return a + b;
// }

// export const name = 'Math Module';
// ==> app.mjs

// import { add, name } from './math.js';

// console.log(add(4, 2));       // 6
// console.log(name);            // Math Module
//  Use .mjs extension or add "type": "module" in package.json.

//  4. When to Use What?

// Use Case	            CommonJS (require)	                                                    ES Modules (import)
// Node.js projects	     Default and widely supported	                                Recommended for modern Node versions
// Front-end (browser)	     Not supported	                                                   Must use ES Modules
// Compatibility	         Works in all Node.js versions	                                     Not in older Node.js without flags
// Modern projects (React, Vue)	 Outdated	                                            Always use ES Modules

// ====>. Difference Between 


//                               CommonJS &                                                               ES Modules
// Feature	                    CommonJS (require)	                                                     ES Modules (import)
// Syntax	                  require() / module.exports	                                               import / export
// Execution	             Synchronous (one after another)	                                     Asynchronous (can load in parallel)
// File extension	               .js	                                                                .mjs or "type": "module"
// Default in	               Node.js (older versions)	                                              Browsers + modern Node.js
// Exports	               Single or multiple using module.exports	                                    Named and default exports
// Import Style	          const x = require('...')	                                                    import x from '...'

