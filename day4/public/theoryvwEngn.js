// // What is a View Engine?
// // A view engine is a templating engine used in web development (especially with Node.js + Express) to generate dynamic HTML pages on the server before sending them to the browser.

// //  it as a bridge between:

// // Your data (from backend/database), and

// // The final HTML page shown to the user
// //why use view engine:-
// // *dynamic html rendering it MediaSession,if you can insert dynamic content like name ,product list etc...in to  HTML easily.
// // * keeps html separate from logic,easy to mainentance  ,change one template  and effect many pages once.HTML

// //working:-
// // install view engine (like ejs,PushManager,handlebars)
// // set it up in your express app
// // use res.render() to render the view and pass data into it.

// 1. EJS (Embedded JavaScript)
// Syntax: Like regular HTML with JavaScript inside <%= %> tags.

// Best for: Beginners, real-world HTML with dynamic values.

// Real-world example: You have a blog and want to show different post titles dynamically.

// html

// <h2><%= postTitle %></h2>
// 2. Pug (formerly Jade)
// Syntax: Indentation-based, no HTML tags.

// Best for: Clean, minimal templates. Fast to write.



// pug

// h2 Hello #{name}
// 3. Handlebars
// Syntax: Uses {{ }} (mustache style).

// Best for: Logic-less templates, safe and clean UI templates.



// html

// <h2>Hello, {{username}}</h2>
//  Setting Up EJS in Express
//  Real-world: You’re building a student portal, and want to display their names and profiles.
// Step-by-step:
// 1. Initialize Node project:


// npm init -y
// npm install express ejs
// 2. Basic Server Setup:


// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs'); // Tell Express to use EJS
// app.set('views', './views');   // (Optional) Set views folder

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
//  Passing Data with res.render()
// Real-world: You want to render a student profile page with name and age.


// app.get('/profile', (req, res) => {
//   res.render('profile', {
//     name: 'Mehrin',
//     age: 22
//   });
// });
// res.render('profile') looks for profile.ejs in the views folder.

// { name: 'Mehrin', age: 22 } is the data passed to the template.


// Views Folder & .ejs Files
// Real-world Structure:
// arduino
// Copy code
// project-folder/
// ├── views/
// │   ├── profile.ejs
// │   └── home.ejs
// └── server.js
// views/: Holds all your EJS templates.

// .ejs file: Contains HTML + dynamic JavaScript.

// 👤 Example: Render a Profile Page (Step-by-Step)
// ➤ views/profile.ejs
// html
// Copy code
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Profile</title>
// </head>
// <body>
//   <h1>Welcome, <%= name %>!</h1>
//   <p>Age: <%= age %> years old</p>
// </body>
// </html>
// ➤ In server.js
// js
// Copy code
// app.get('/profile', (req, res) => {
//   res.render('profile', {
//     name: 'Mehrin',
//     age: 22
//   });
// });


// output:-
// Welcome, Mehrin!
// Age: 22 years old
// ==============summary===============
// Topic	Real-World Analogy
// EJS Setup	Choosing a language for invitations
// res.render()	Filling in name, age, etc. on each invite
// views folder	Where you keep all your invitation designs
// .ejs files	Editable templates with blanks (name, age)
// Rendering Profile	Sending custom profile data to each user