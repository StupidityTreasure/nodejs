import http from "http";

const myserver=http.createServer((req,res)=>{
    console.log("new req recived");
    res.end("hii from server")
});

myserver.listen(8000,()=>console.log("server started"));
