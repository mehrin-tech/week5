const express=require('express')
const app=express()
const port=3000

const user1=require('./router/user')
const repos1=require('./router/respo')

app.use('/users',user1)
app.use('/respo',repos1)

app.get('/',(req,res)=>{
    res.send("welcome back")
})
app.use((req,res)=>{
    res.status(404).json({error:"not found"})
})
app.listen(port,()=>console.log('server is running on 3000'))