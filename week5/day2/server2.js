//using express
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("welcome everyone")
})
app.get('/about',(req,res)=>{
    res.send("About page")
})
app.get('/contact',(req,res)=>{
    res.send("contact page")
})


app.listen(3000,()=>console.log("server2 is running port 3000"))