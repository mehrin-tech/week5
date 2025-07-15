// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain',
//         'Access-Control-Allow-Origin':'*',
    
//     })
//     if(req.url=='/'){
//     res.end("hello everyone , welcome to my class")
//     }else if(req.url=='/about'){
//         res.end("About page")
//     }else if(req.url=='/services'){
//         res.end("Services page")
//     }else if(req.url=='/Contact'){
//         res.end("Contact page")
//     }else{
//         res.end("not found")
//     }
// })

// server.listen(3000,()=>console.log("server is running on 3000 port"))
                                  
//  1. What is a Server?

//  What is a Server in networking and web development?

// A server is a computer program or physical machine that provides data, services, or resources to other computers (called clients) over a network. It waits for requests and responds accordingly — like hosting websites, serving files, processing databases, or providing APIs.
// eg:-
// When you open www.facebook.com, your browser sends a request to Facebook’s web server, which then sends back the HTML, CSS, and JavaScript that build the webpage.
// ________________________________________
//  2. How Can a Computer Become a Server?

//  Can a normal computer become a server? If yes, how?

// Yes. Any computer can become a server by:
// 1.	Installing server software (e.g., Node.js, Apache, Nginx).
// 2.	Running a program that listens on a port and handles requests.
// 3.	Configuring firewalls/permissions to allow connections.
//  Example in Node.js  local server:-

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end("Hello from Mehrin's Server!");
// });
// server.listen(3000, () => console.log("Running on http://localhost:3000"));
// Here, your own laptop becomes a server running on port 3000.
// ________________________________________
//  3. Localhost vs Remote Server

// Q: What is the difference between localhost and a remote server?

// Feature     	Localhost	              Remote Server
// Location	Your own device (127.0.0.1)	A server hosted online (e.g., AWS)
// Accessibility	Only accessible to you	Accessible from anywhere (via domain/IP)
// Purpose	Development and testing	Live production hosting
// URL Ex	http://localhost:3000	https://mehrinportfolio.com
//  Example:
// •	localhost:3000 → You're running a local development server on your machine.
// •	https://api.github.com → You're calling a remote API from GitHub's remote server.

//  What is a Port (Default & Custom Ports)

//  What is a Port in networking? What are default and custom ports?

// A port is a logical number (0–65535) that identifies a specific service or application on a device. It allows multiple applications to run on the same machine without conflict.
// •	Default Ports are pre-assigned to common services.
// •	Custom Ports are user-defined, mainly used in development.
// ________________________________________
//  Default Port Examples:
// Service	Port
// HTTP	80
// HTTPS	443
// FTP	21
// SSH	22
// MySQL	3306
// -> Custom Port Example:
// -> create a server with Node.js or Express on port 5000:

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });
// Here, 5000 is a custom port chosen by the developer.



// ______SUMMARY ________
// Concept	Example / Key Point
// Server	Facebook server sends data to your browser
// Computer as a Server	Node.js script on your laptop can host content
// Localhost vs Remote	localhost:3000 (local), vercel.app (remote)
// Port	HTTP → 80 (default), Custom → 3000 or 5000 in dev

//  What Kind of Requests Does a Server Receive?
//  A server receives HTTP requests (in web development), which are messages sent by clients (like browsers, apps, or tools like Postman) asking for data or services.

// .--> HTTP Request Basics
// -> What is an HTTP Request?
// An HTTP request is a message sent from a client to a server asking for:
// •	A web page
// •	Data from a database
// •	To create, update, or delete something on the server
// It follows the HTTP protocol (HyperText Transfer Protocol), which defines how communication happens between client and server.

// . Request Types (HTTP Methods)
// HTTP requests come in different types, called methods. Each method tells the server what action the client wants to perform.
// Method	Purpose	Example
// GET	Read/Retrieve data	View a user profile
// POST	Create new data	Submit a form
// PUT	Update existing data	Edit a profile
// PATCH	Update partially	Update email only
// DELETE	Delete data	Remove a user

// eg;-
// GET /api/users/23
// This tells the server: Give me details about user with ID 23.

//  3. Structure of the Request
// An HTTP request has 3 main parts:
//  1. URL (or Endpoint)
// The path that specifies where the request is going on the server.
// •eg:-

// https://api.example.com/users/45
// •	https:// = protocol
// •	api.example.com = domain/server
// •	/users/45 = endpoint (resource path)

// ________________________________________
//  2. Headers
// Metadata about the request — tells the server things like format, authorization, device info, etc.
// -> Common Headers:
// Header	Purpose	Example
// Content-Type	Type of data being sent	application/json
// Authorization	Auth token	Bearer eyJ...
// User-Agent	Info about the client	Mozilla/5.0
//  Example:

// Headers:
// Content-Type: application/json
// Authorization: Bearer abc123token
// This tells the server:
// •	“I’m sending JSON.”
// •	“I’m an authorized user.”
// ________________________________________
//  3. Body (Only in POST, PUT, PATCH)
// The main data payload sent with the request (used to create or update something on the server).
//  Example:

// {
//   "name": "Mehrin",
//   "email": "mehrin@example.com"
// }
// This is the actual data the client is sending to the server.
// •	GET and DELETE usually don't have a body.
// •	POST, PUT, PATCH must have a body.


// Complete Example:
// POST /api/users
// Purpose: Create a new user.
// Request:
// http
// CopyEdit
// POST /api/users HTTP/1.1
// Host: api.example.com
// Content-Type: application/json
// Authorization: Bearer abc123token

// {
//   "name": "Mehrin",
//   "email": "mehrin@example.com"
// }
// Breakdown:
// •	URL: /api/users → Targeting the users collection
// •	Headers: JSON data and auth token
// •	Body: Data for new user to be created

//  Summary Table
// Part	Purpose	Example
// Method	What to do (GET, POST, etc.)	POST
// URL	Which resource to access	/api/users/5
// Headers	Metadata about request	Content-Type: application/json
// Body	Actual data payload	{ "name": "Mehrin" }


// What Does the Server Send Back? (HTTP Response)
// When a client (like your browser or Postman) sends a request to a server, the server responds with an HTTP response. This response gives details like:
// •	 What happened (success, failure)
// •	 What kind of data is returned (HTML, JSON, etc.)
// •	 How to process or display it

//  HTTP Response Basics
//  What is an HTTP Response?
// An HTTP response is the message the server sends back to the client after receiving and processing a request.
// It always contains 3 main parts:
// 1.	Status Code – What happened
// 2.	Headers – Meta information
// 3.	Body – Actual content (if any)

 
// 1. Status Code 
//  What is it?
// A 3-digit number that shows the result of the client’s request.

// examples:-
// Status Code	Meaning	When Used
// 200 OK	Success	Data returned successfully
// 201 Created	Resource created	After successful POST/PUT
// 400 Bad Request	Invalid client input	Form is missing a required field
// 401 Unauthorized	Not logged in	Token missing or invalid
// 403 Forbidden	No permission	Logged in, but not allowed
// 404 Not Found	Resource not found	Wrong endpoint or ID
// 500 Internal Server Error	Server failed	Code crash, misconfiguration



// HTTP/1.1 200 OK
// It means the server successfully processed the request and is sending the result.

//  2. Headers 
//  What is it?
// Headers give additional information about the response — like the format of the data, cache settings, or cookies.
// They come as key-value pairs before the body.


// Common Response Headers:
// Header	Purpose	Example
// Content-Type	Type of data in the body	application/json, text/html
// Set-Cookie	Sends cookies to store in browser	Set-Cookie: session=abc123
// Content-Length	Size of body content	Content-Length: 345
// Cache-Control	Tells browser how to cache response	no-cache, max-age=3600
// Access-Control-Allow-Origin	CORS configuration	* or specific domain

// Content-Type: application/json
// Set-Cookie: token=xyz123; HttpOnly
// •	Content-Type tells browser/API client to expect JSON
// •	Set-Cookie stores a token in the browser (used for login sessions)

//  3. Body 
//  What is it?
// The body contains the actual response data — this could be:
// •	 HTML (for pages)
// •	 JSON (for APIs)
// •	Plain text
// •	 Files (images, PDFs)


// -------summary-------
// Part	Description	Example
// Status Code	Tells if the request was successful	200 OK, 404 Not Found
// Headers	Meta info about response	Content-Type: application/json
// Body	The actual data/content	JSON, HTML, text, etc.



//  What is an API?

// API stands for Application Programming Interface.
// An API is like a menu at a restaurant. It tells you what you can ask for, and the kitchen (backend/server) will respond accordingly.
// In web development, an API is a set of rules and endpoints that allows:
// •	A frontend app to talk to the backend/server
// •	One software to interact with another

//  Why:
// •	Allows separation of frontend and backend
// •	Makes data accessible to other apps/services
// •	Enables reusability (one API can serve mobile, web, etc.)

//  How ex:- :

// GET https://api.weather.com/current?city=Kozhikode
// Request: Your app hits that API.
// Response:
// json
// CopyEdit
// {
//   "city": "Kozhikode",
//   "temperature": "31°C"
// }
// This is an API in action — the app asks the server for data, and it gets a structured reply (usually in JSON).

//  What is Node.js?

// Node.js is a JavaScript runtime built on Chrome's V8 engine.
// It allows you to run JavaScript outside the browser, especially on the server-side.
// So with Node.js, you can build:
// •	Servers
// •	APIs
// •	Command-line tools
// •	Real-time apps (chat, games)

// Why:
// Traditionally, JS was only for frontend. Node.js made it possible to use JavaScript for backend, so:
// •	You can use one language (JS) across full stack
// •	It's fast and scalable (non-blocking I/O)
// •	Great for real-time applications (like chats, games)


// Install Node.js → create a server → run it

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello from Node.js server!');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });
// When you open http://localhost:3000, you'll see:
// pgsql
// CopyEdit
// Hello from Node.js server!
// ________________________________________
// ✅ 3. Key Features of Node.js (with What-Why-How + Examples)
// Feature	What	Why	How / Example
// Asynchronous & Non-blocking	Handles multiple requests without waiting	Improves performance & scalability	Uses callbacks, Promises, async/await
// Single-threaded with Event Loop	Uses one thread to handle many tasks via event loop	Saves memory, avoids thread issues	Internally manages multiple clients
// Cross-platform	Runs on Windows, Mac, Linux	Code once, run anywhere	Node.js app can run on any OS
// Fast Execution	Uses Chrome's V8 engine	V8 compiles JS to machine code quickly	High performance for APIs
// NPM (Node Package Manager)	Huge library of ready-made modules	Saves time, increases productivity	npm install express
// Built-in Modules	Comes with modules like fs, http, path	Don’t need extra libraries for basics	require('fs'), require('http')
// Supports JSON	Native support for JSON	Perfect for APIs and modern web	JSON.parse(), JSON.stringify()



// -> Basic Node.js Server using the http Module (Plain Text Response)
// Create a file called server.js:

// // server.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//                                                              // Set response header
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
  
//                                                      // Send plain text response
//   res.end('Hello from Node.js server!');
// });

//                                                        // Start server on port 3000
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });






//  What is Routing in Node.js?
 
// Routing is the process of defining different responses for different URL paths.
// Example:
// / Homepage
// /about → About page
// /contact → Contact page
// Anything else → 404 Not Found

//  Why:
// Without routing, your server can only send one response. Routing allows your server to behave like a website or API with multiple pages or endpoints.


// Using the http module, you:
// 1.	Listen to req.url
// 2.	Use if or switch to handle each route
// 3.	Send different responses for each route

//  Manual Routing Example in Node.js

// const http = require('http');

// const server = http.createServer((req, res) => {
//   const url = req.url;

  
//   res.setHeader('Content-Type', 'text/html');

//   if (url === '/') {
//     res.writeHead(200);
//     res.end('<h1>Welcome to the Home Page</h1>');
//   } else if (url === '/about') {
//     res.writeHead(200);
//     res.end('<h1>About Us</h1><p>This is the about page.</p>');
//   } else if (url === '/contact') {
//     res.writeHead(200);
//     res.end('<h1>Contact</h1><p>Email us at contact@example.com</p>');
//   } else {
//     // 404 Not Found (fallback)
//     res.writeHead(404);
//     res.end('<h1>404 - Page Not Found</h1>');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });


