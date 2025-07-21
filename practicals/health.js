const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/health'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("server is healthy")
    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("Not found")
    }
})
server.listen(3000,()=>{
    console.log("server is runing on 3000 port")
})