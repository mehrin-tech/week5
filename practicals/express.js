const express=require('express')
const app=express()
const PORT=3000
app.get('/',(req,res)=>{
    res.send("welcome home page")
})
app.get('/About',(req,res)=>{
    res.send("About page")
})
app.get('/contact',(req,res)=>{
    res.send("Contact page")
})
app.listen(PORT,()=>console.log("server is running on port"))