const mongoose=require('mongoose');
const express=require('express');
const { User } = require('lucide-react');
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/student');
}main((res)=>{console.log('db connceted')}).catch((err)=>console.log(err))
//scheme means overall structure
const studentSchema=new mongoose.Schema({
        name:String,
        email:String,
        age:Number,
})
const user=mongoose.model('user',studentSchema);
user.findOneAndDelete("69d498a65172bf6b9b66ba9f")
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})

/*user.insertMany([
        {name:'kavya',gmail:'kavya@gmail.com',age:21},
         {name:'ramya',gmail:'ramya@gmail.com',age:25},
          {name:'joshna',gmail:'joshna@gmail.com',age:25}

]).then((res)=>{
        console.log(res);
})*/