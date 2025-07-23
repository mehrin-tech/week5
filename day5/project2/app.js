const express=require('express')
const app=express()
const path=require('path')
const session=require('express-session')

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(session({
  secret: 'your-secret-key',   // any secret string
  resave: false,
  saveUninitialized: false
}));


 const USERNAME='mehrin'
 const PASSWORD='2078'

app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/login',(req,res)=>{
    res.render('login',{error:null})
})

app.post('/login',(req,res)=>{
    const {username,password}=req.body

    if(username===USERNAME && password===PASSWORD){
        req.session.isAuth=true
        res.redirect('/home')
    }else{
        res.render('login',{error:"invalid credentials"})
    }
})

app.get('/home',(req,res)=>{
    if(req.session.isAuth){
        res.render('home')
    }else{
        res.redirect('/login')
    }
})

//signout

app.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})

app.listen(3000,()=>console.log("server is running on 3000 port"))