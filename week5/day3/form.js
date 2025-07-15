const express=require('express')
const app=express()
const cors=require('cors')
const port=3000
app.use(cors())
app.use(express.urlencoded({extended:true})) //if you didn't use this form as  typeerror .so we use express.
                                               // urlencoded solve the issue
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send(`hello ${req.body.username},login successfully`)
})
app.listen(port,()=>{
    console.log(`server is ruuning on port ${port}`)
})