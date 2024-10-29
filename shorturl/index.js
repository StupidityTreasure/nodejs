import express from "express"
import path from 'path'
import dotenv from "dotenv"
import url from "./models/url.js"
import urlRoute from "./router/url.js"
import connectDB from "./connect.js"
dotenv.config() 
const app=express()

const PORT=8001


connectDB()
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.json())
app.get('/url/test',async(req,res)=>{
    
    return res.render("home")
})

app.use("/url",urlRoute)

/*
app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
   const entry = await url.findOneAndUpdate({
        shortId
    },
    {$push:{
        visitHistory:{timestamp:Date.now()}
    }},
)
    res.redirect(entry.redirectUrl)
})
    */

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    try {
        // Find the URL by shortId and update visit history
        const entry = await url.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true } // Return the updated document
        );

        // If no entry is found, return a 404 error
        if (!entry) {
            return res.status(404).json({ error: "URL not found" });
        }

        // Redirect to the original URL
        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error(`Error in URL redirection: ${error.message}`);
        res.status(500).json({ error: "Server error, please try again" });
    }
});



app.listen(PORT,()=>{
    console.group(`server started at port:${PORT}`)
})