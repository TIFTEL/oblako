const express = require ("express");
const mongoose = require("mongoose");
const {data} = require("./config/default.js")
const PORT = data.serverPort
const app=express()

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