const express=require('express')
const app=express()
app.get('/text',(req,res)=>{
    res.type('text')
    res.send("this is a plain text")
})
app.get('/html',(req,res)=>{
    res.send("<h1>Good Morning</h1> world")
})
app.post('/json',(req,res)=>{                          //using diffrent http mehtd handler
    res.json({name:"Mehrin",age:22})
})
app.use((req,res)=>{
    res.status(404).send('invalid')//it is used to handling unmateched routes
})
app.listen(3000,()=>console.log("server is running on 3000"))