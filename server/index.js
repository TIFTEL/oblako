const express = require ("express");
const mongoose = require("mongoose");
const config = require("config")
const PORT = config.get("serverPORT")
const app=express()

const start= async ()=>{
    try{
        //await mongoose.connect(config.get('dbURL'))
        app.listen(PORT, ()=>{
            console.log('Server started on port', PORT)
        })
    } catch (e){

    }
}
start()