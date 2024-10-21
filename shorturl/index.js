import express from "express"
import dotenv from "dotenv"

import urlRoute from "./router/url.js"
import connectDB from "./connect.js"
dotenv.config() 
const app=express()

const PORT=8001


connectDB()

app.use(express.json)


app.use("/url",urlRoute)

app.listen(PORT,()=>{
    console.group(`server started at port${PORT}`)
})