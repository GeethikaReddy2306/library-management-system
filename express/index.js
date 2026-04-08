const express=require('express')
const app=express()
// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{console.log('db is connected')}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}
app.get('/',(req,res)=>{
        res.send('home page')
})
app.listen(3000,()=>{
        console.log('server is running in 3000 port')
})