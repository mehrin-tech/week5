const express=require('express')
const router=express.Router()

const repos = [
  { id: 1, name: 'express-app', owner: 'mehrin' },
  { id: 2, name: 'node-utils', owner: 'john' },
];


router.get('/',(req,res)=>{
    res.json(repos)
})
router.get('/:id',(req,res)=>{
    const repo=repos.find(rep=>rep.id==req.params.id)

    if(repo){
        res.json(repo)
    }else{
        res.status(404).json({error:"Not found"})
    }
})
module.exports=router