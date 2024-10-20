/*import http from "http";
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
*/

//starting with expresss
import http from "http"
import express from "express"
import fs from 'fs'
import users from './MOCK_DATA.json' assert { type: 'json' };


const app =express();
//Middlewares are functions which process request ,return responses and can also pass the request to next middleware
//it can also be treating as plugin

app.use(express.urlencoded({extended:false}));//this middleware takes the data from form and convert it to object and pass it to next middleware or route
app.use((req,res,next)=>{
    console.log("heelo world");
    next();
})


app.use((req,res,next)=>{
    fs.appendFile("log.txt",`/n ${Date.now()}:${req.method}:${req.path}`,(err,data)=>{
        next();
    })
    
})

app.get('/',(req,res)=>{
    return res.send(`hello from home page`)
})
app.get('/api/users',(req,res)=>{
    //headers
    res.setHeader("X-myname","neha");//always add x- to a custom error
    return res.json(users);
})
app.get('/about',(req,res)=>{
    return res.send(`hello from about page  ${req.query.name}`)
})


app.post('/api/users',(req,res)=>{
    const body=req.body;
    users.push({...body,id: users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length})
    })

    
})

app.patch('/api/users',(req,res)=>{
    return res.json({ststus:"pending"})
})

app.delete('/api/users',(req,res)=>{
    return res.json({ststus:"pending"})
})

app.listen(8000,()=>console.log(`server started`))
/*
const myserver=http.createServer(app)

myserver.listen(8000,()=>console.log("server started"));
*/