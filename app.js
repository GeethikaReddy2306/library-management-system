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
   year: Number})
   const User=mongoose.model("user",userSchema);
    const Employe=mongoose.model("employe",userSchema);
    const user1=new User({name: "geethika",email:"geethikakotu@gmail.com", rollnumber:29,year:3})
    user1.save();