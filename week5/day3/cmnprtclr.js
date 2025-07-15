// const express=require('express')
// const app=express()

// const middlewarefn=(req,res,next)=>{
//  console.log("middleware 1st is working")
//  next()
// }
// app.use((req,res,next)=>{
//     console.log("common middleware")
//     next()
// })
// app.get('/',middlewarefn,(req,res)=>{
//     res.send("Hello welcome...")
// })
// app.get('/login',(req,res)=>{
// res.send("From Login...")
// })
// app.listen(3000,()=>console.log("server is running on 3000 port"))



const express=require('express')
const app=express()
const cors=require('cors')

app.use(cors())
app.use(express.json())  // without express.json data recieved undefined,but with express.json  data recied :{name:"mehrin",age:22}

const middlewarefn=(req,res,next)=>{
 console.log("middleware 1st is working")
 next()
}
app.use((req,res,next)=>{
    console.log("common middleware")
    next()
})
app.get('/',middlewarefn,(req,res)=>{
    
    res.send("Hello welcome...")
})
app.post('/login',(req,res)=>{
    console.log("data recieved :",req.body)
res.send("From Login...")
})
app.listen(3000,()=>console.log("server is running on 3000 port"))

//  ->req.body in Express.js
// req.body stands for "request body" — it contains data sent by the client in the body of the HTTP request, 
// usually in POST, PUT, or PATCH requests.

//in this case thunder & localhost is different origin,so they didn;t work properly,so we use CORS solve the issue
//Cors is a third-party midddleware,Cross-origin resource sharing
//It is a security feature implemented by browsers to control how web pages can make requests to a different origin
//  (domain, port, or protocol) than the one from which the page was loaded.

// example:-
// Imagine this:

// Your frontend runs on http://localhost:3000

// Your backend API is at http://localhost:5000

// When the frontend tries to make a request to the backend:
// The browser will block the request by default — because it's a cross-origin request.
// This is where CORS comes in.
// Why Browsers Enforce CORS?
// To protect users from malicious websites that try to:

// Send requests on behalf of users

// Read sensitive data from APIs the user is logged into (e.g., banking, email, etc.)

// there are diffrent types of middlewares:-
// 1)built-in-:- in express is already available in built -in middleware.
// 2 types middleware in buit-in:-
// 1)express.json()-to parse json Data.
// 2)express.urlencoded():-to parse form data .

// 2)Application-level:-its manually created use our own middleware or custom middleware.

// 3) thrid-party:-In express is a middlewre functn is created by someone else usually installed via npm.
// and to add useful features like logging,security,...