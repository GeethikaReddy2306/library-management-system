const express=require('express');
const app=express()
const port=3000
const firsthandler=((req,res,next)=>{
        if(10>20)
                next()
        
        
})
app.get('/home',firsthandler,(req,res)=>{
        res.send("hellohomepage");
})
app.get('/about',(req,res)=>{
        res.send("this is abour page");
})
app.get('/user/121',(req,res)=>{
        res.send("you searched 121");
})
app.listen(port,()=>{
        console.log("server started")
})