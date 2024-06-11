const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {productmodel} = require("./models/product")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://rizna10:rizna2003@cluster0.u7ke2.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let product = new productmodel(input)
    product.save()
    res.json({"status":"success"})
    
})

app.post("/search",(req,res)=>{
    res.send("Search")
})

app.post("/delete",(req,res)=>{
    res.send("delete")
})

app.get("/viewall",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})

app.listen(8085,()=>{
    console.log("server started")
})