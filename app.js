const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const product = require("./models/product")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/search",(req,res)=>{
    res.send("Search")
})

app.post("/delete",(req,res)=>{
    res.send("delete")
})

app.post("/viewall",(req,res)=>{
    res.send("view")
})

app.listen(8080,()=>{
    console.log("server started")
})