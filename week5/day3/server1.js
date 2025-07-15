const express=require('express')
const app=express()



const middlewarefn=(req,res,next)=>{
    console.log("middleware 1st is working")
    next()
}
app.use((req,res,next)=>{
    
})//this is global middleware,so it runs for every reqeust
app.get('/',middlewarefn,(req,res)=>{
    res.send("helloo Guys")
})
app.use(()=>{

})
app.listen(3000,()=>console.log("server is running on 3000 port"))