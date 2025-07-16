const express=require('express')
const router=express.Router()

const users=[
    { id: 1, username: 'mehrin', followers: 150 },
  { id: 2, username: 'john', followers: 80 },
]

router.get('/',(req,res)=>{
    res.json(users)
})

router.get('/:id',(req,res)=>{
   const user=users.find(u=>u.id==req.params.id)
   if(user){
    res.json(user)
   }else{
    res.status(404).json({error:"Not found"})
   }
})

module.exports=router