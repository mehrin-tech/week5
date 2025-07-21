const express=require('express')
const fs=require('fs')
const path=require('path')
const app=express()
const port=3000

const filePath=path.join(__dirname,'data','student.txt')

app.get('/write',(req,res)=>{
    fs.writeFile(filePath,'Name:Mehrin',(err)=>{
        if(err){
            return res.send('error writing file')
        }res.send('file created successfully')
    })
})
app.get('/read',(req,res)=>{
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            return res.send('file not found')
        }
        res.send('file readed succesfully')
    })
})

app.get('/append',(req,res)=>{
    fs.appendFile(filePath,'\nGrade:A+',(err)=>{
        if(err){
            return res.send('file append not found')
        }
        res.send('data append is successfully')
    })
})
app.get('/info',(req,res)=>{
   const fileName=path.basename(filePath)
   const extName=path.extname(filePath)
   const folderName=path.dirname(filePath)

   res.send(`<p>file:${fileName}</p>
    <p>ext:${extName}</p>
    <p>folder:${folderName}</p>`)

})
app.get('/delete',(req,res)=>{
    fs.unlink(filePath,(err)=>{
        if(err) return res.send('err deleting file')
            res.send('file deleted successfully')
    })
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})