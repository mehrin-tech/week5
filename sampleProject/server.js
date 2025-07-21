const express=require('express')
const app=express()
const port=3000

//step1: set ejs as view engine

app.set('view engine','ejs')

//step2:route that renders ejs

app.get('/',(req,res)=>{
    const userData={
        userName:'Mehrin',
        hobbies:['coding','Reading','cooking']
    }
    //step3:pass data to ejs template
    res.render('home',userData)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})