const express=require('express')
const path=require('path')
const app=express()
const port=3000

app.set('view engine','ejs') //views->ejs files

//server static files from 'public' folder
app.use(express.static(path.join(__dirname,'public')))

//route:send home.html
app.get('/',(req,res)=>{
   // res.sendFile(path.join(__dirname,'public','home.html'))
res.render('home',{userName:"Mehrin"})
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','contact.html'))
})

app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})
