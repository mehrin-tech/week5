const express=require('express')
const  app=express()
const path=require('path')
const port=3000


app.set('view engine','ejs')
// app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname)))

const products=[
    {name:'foundation',price:3999,image:'./images/foundation.jpeg'},
    {name:'lipstick',price:1299,image:'./images/lipstick.jpeg'},
    {name:'blush',price:2999,image:'./images/blush.webp'},
    {name:'eyelinear',price:129,image:'./images/eyelinear.webp'}
]

app.get('/products',(req,res)=>{
    res.render('products',{products})
})

app.listen(3000,()=>{
    console.log(`server is running on port ${port} `)
})