// =====SAMPLE PROGRAM OF CORE MODULE FS=====
const express=require('express')
const fs=require('fs')
const app=express()
const port=3000
const fileName='studentData.txt'

app.get('/write',(req,res)=>{
fs.writeFile(fileName,'student:mehrin\nMarks:90',(err)=>{
if(err){
     return res.status(500).send('err file')
}res.send('file written successfully')
})
})

app.get('/read',(req,res)=>{
fs.readFile(fileName,'utf-8',(err,data)=>{
if(err){
return res.status(404).send('file not found')
} res.send('<pre>${data}</pre>')
})
})

app.get('/append',(req,res)=>{
fs.appendFile(fileName,'\nGrade:A+',(err)=>{
if(err){
return res.status(500).send('failed to append data')
}res.send('Data append successfully')
})
})

app.get('/exists',(req,res)=>{
const exists=fs.existsSync(fileName)
res.send(exists? 'file exists':'file doosn’t exist')
})

app.get('/delete',(req,res)=>{
fs.unlink(fileName,(err)=>{
if(err){
return res.status(500).send('err deleting file')
}
res.send('file deleted successfully')
})
})
app.listen(port,()=>{
console.log(`server is running on ${port}`)
})
