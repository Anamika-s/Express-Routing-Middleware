// const express = require("express")
// const path = require("path")
import express from "express"
import  path  from "path"

var app = express()

const port = 3000
const __dirname= path.resolve()
app.get("/", (req,res)=>
{
   

  res.send("Home Page")
})

app.get("/aboutus", (req,res)=>
{
  res.send("<h1> About Us </h1>")
})


app.get("/contactus", (req,res)=>
{
  // res.send("<h1> Contact Us </h1>")
  res.sendFile(path.join(__dirname + "/views/contactus.html"))
})





app.listen(port , ()=>
{
  console.log(`Server is listening at port no ${port}`)
})
