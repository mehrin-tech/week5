const express=require('express')
const app=express()

app.use((req,res,next)=>{
   console.log("middleware 1 is working")
   next()
})
app.use((req,res,next)=>{
    console.log("middleware 2 is working")
    next()
})
app.use((req,res,next)=>{
    console.log("middleware 3 is working")
   res.send("helloooo")
})

app.get('/',(req,res)=>{
    res.send("Home page")
})
app.listen(3000,()=>console.log("server is runing on 3000 port"))


// middleware:-
// Is a function that runs btw the req, and res.