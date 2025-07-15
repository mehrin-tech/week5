const express=require('express')
const app=express()

app.get('/greet',(req,res)=>{
    const name=req.query.name
    const age=req.query.age
    res.send(`hello my name is ${name} and your age is ${age}`)
})
app.listen(3000,()=>console.log("server is running in port 3000"))


