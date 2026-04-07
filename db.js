const express=require('express')
const app=express()
const port=3000;
// getting-started.js
const mongoose = require('mongoose');
// getting-started.js
const mongoose = require('mongoose');
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/attend');
}
main().catch(err => console.log(err));
const studentSchema=new mongoose.Schema({
        name:String,
        age:Number,
        course:String,
        attendence:Number
})
  await Student.create({
    name: "Geethu",
    age: 23,
    course: "MERN",
    attendance: 90
  });

const Student = mongoose.model("Student", studentSchema);
app.get('/', (req, res) => {
  res.send("Server Working");
});
app.listen(port,()=>{
        console.log('server is working')
})