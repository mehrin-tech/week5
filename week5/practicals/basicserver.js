//Node
const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})  
    // res.end('Hello Guyss welcome')//text/plain
   // res.end('<h1>Hello Good</h1> morning')//text/html
 
})
server.listen(3000,()=>console.log("server is running on port 3000"))

