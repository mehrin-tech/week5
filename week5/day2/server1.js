//without express

const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain',
        "Access-Control-Allow-Origin":'*'
    })
    if(req.url=='/' && req.method=='GET'){
        res.end("hello everyone...")
    }else if(req.url=='/' && req.method=='POST'){
        res.end("hello")
    }else if(req.url=='/about'){
        res.end('about page')
    }else{
        res.end('page not found')
    }
})
server.listen(3000,()=>console.log("server is running"))