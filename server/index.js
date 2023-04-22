const express = require ("express");
const mongoose = require("mongoose");
const {data} = require("./config/default.js")
const PORT = data.serverPort
const authRouter=require("./routes/auth.routes")
const app=express()
app.use(express.json())
app.use( "/api/auth", authRouter)
const start= async ()=>{
    try{
        await mongoose.connect(data.dbURL)
        app.listen(PORT, ()=>{
            console.log('Server started on port', PORT)
        })
    } catch (e){

    }
}
start()