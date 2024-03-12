const http=require('http');
const express=require('express')
const app=express();
app.use((req,res,next)=>{
    console.log("in the first middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("in another  middleware");
    res.send('<h1>Welcome to Express.js</h1>')
   
})
app.listen(4000);