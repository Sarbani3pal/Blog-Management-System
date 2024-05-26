import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/blogmanagement");

const express = require("express");
const app = express();


// const isBlog = require("./middlewares/isBlog");

// app.use(isBlog.isBlog);

// //for admin routes
// const adminRoute = require ("./routes/adminRoute");
// app.use('/',adminRoute);

app.get('/',function(req,res){
    res.send('hello');
});

app.listen(3000,function(){
    console.log("Server is running");
});