const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1> world')
})

app.listen(3000,()=>console.log("server is running on 3000 port"))