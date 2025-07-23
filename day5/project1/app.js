const express=require('express')
const session=require('express-session')
const app=express()
const path=require('path')
const port=3000


app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));



app.use(session({
  secret: 'your-secret-key',   // any secret string
  resave: false,
  saveUninitialized: false
}));


const USERNAME='admin'
const PASSWORD='1234'





app.get('/',(req,res)=>{
    res.redirect('/login')
})

//login page
app.get('/login',(req,res)=>{
    res.render('login',{error:null})
})

//login form submit
app.post('/login',(req,res)=>{
    const {username,password}=req.body

    if(username===USERNAME && password===PASSWORD){
        req.session.isAuth=true
        // req.session.username=username
        res.redirect('/home')
    }else{
        res.render('login',{error:'invalid credentials'})
    }
})
//home route
app.get('/home',(req,res)=>{
 if(req.session.isAuth){
    res.render('home')
 }else{
    res.redirect('/login')
 }
})

//signout
app.post('/signout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})


app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))