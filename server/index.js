import http from "http";
import fs from "fs"
import url from 'url';
const myserver=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()}:${req.method}${req.url} new req recived \n`
    const myUrl=url.parse(req.url,true);
    console.log(myUrl );
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username=myUrl.query.myname;
                res.end(`I am ,${username}`)
                break;
            case "/signup":
                if(req.method==="GET") res.end("this is form")
                else if(req.method==="POST") res.end("Success")
            default:
                res.end("404 Not Found")
        }
    })

});

myserver.listen(8000,()=>console.log("server started"));
