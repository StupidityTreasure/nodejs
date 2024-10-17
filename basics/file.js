const fs=require("fs")
const os=require("os")
/*
//syunchronous call
fs.writeFileSync("./test.txt","hello world")


//const result=fs.readFileSync("./test.txt" ,"utf-8")
//console.log(result)

fs.appendFileSync("./test.txt",`${Date.now()} hey`)

fs.cpSync("test.txt","copy.txt")
fs.unlinkSync("./copy.txt")
*/

//blocking request
/*
const result=fs.readFileSync("contact.txt","utf-8");
console.log(result);
console.log(2);
*/

//non bl0cking operation
fs.readFileSync("contact.txt","utf-8",(err,result)=>{
    console.log(result);
});
console.log(3);
console.log(4);
console.log(2);
console.log(os.cpus().length);

