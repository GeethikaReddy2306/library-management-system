// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
        console.log('coneection successfully')
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema=new mongoose.Schema({
        name:String,
    email:String,
     rollnumber:Number,
   year: Number,
  booktaken :Number,
   bookpreviousl:Number})
   const User=mongoose.model("user",userSchema);
    const Employe=mongoose.model("employe",userSchema);
User.insertMany([{name: "geethika",email:"geethikakotu@gmail.com", rollnumber:29,year:3,booktaken:4,bookpreviousl:0},
  {name: "kavya",email:"kavya@gmail.com", rollnumber:20,year:3,booktaken:6,bookpreviousl:1},
   {name: "nikitha",email:"nikitha@gmail.com", rollnumber:81,year:3},{name: "deepika",email:"deepika@gmail.com", rollnumber:80,year:3},
  {name: "sai",email:"sai@gmail.com", rollnumber:21,year:2}])