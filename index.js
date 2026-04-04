const express=require('express');
const app=express();
const port=3000;
const path=require("path");
const mongoose=require('mongoose');
main()
.then(()=>{
        console.log("connection sucessfully:");

})
.cath((err)=>console.log("connection successfully"));
async function name() {
        await mongoose.connect('mongodb://127.o0.0.1:27017/apps')
}
app.set('views',path.join(__dirname,"views"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
        res.send("working root");
})
app.listen(port,()=>{
        console.log('server is running successfully')
})