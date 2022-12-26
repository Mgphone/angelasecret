//jshint esversion:6
require('dotenv').config()
const express=require("express");
const ejs= require("ejs")
const bodyParser=require("body-parser");
const app=express();

app.use(express.static("public"));
app.set('view engine','ejs');
const md5=require('md5');
const mongoose=require("mongoose");
app.use(bodyParser.urlencoded({
  extended:true
}));
mongoose.set('strictQuery',false);
mongoose.connect("mongodb+srv://mgphone:mgphone@cluster0.ccftyls.mongodb.net/userDB");
const userSchema=new mongoose.Schema({
  email:String,
  password:String
});

const User=mongoose.model("User",userSchema);
app.get("/",function(req,res){
  res.render("home");
});
app.get("/login",function(req,res){
  res.render("login");
});
app.get("/register",function(req,res){
  res.render("register");
});
app.post("/register",function(req,res){
  const newUser= new User({
    email:req.body.username,
    password:md5(req.body.password)
  });
  newUser.save(function(err){
    if (err){
      console.log(err);
    }
    else{
      res.render("secrets");
    }
  });
});
app.post("/login",function(req,res){
const username=req.body.username;
const password=md5(req.body.password);

User.findOne({email:username},function(err,result){
  if(err){
    console.log(err);
  }
  if(!err){
    if(result){
      if(result.password===password){
        res.render("secrets");
      }
    }
  }
})
});


app.listen(3000,function(){
  console.log("Server started on port 3000");
  
});