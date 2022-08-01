const express = require("express");
var bodyParser = require('body-parser')
const cors = require("cors");
const fileUpload = require('express-fileupload');
const SignupRouter = require("./routes/singup")
const LoginRouter = require("./routes/login")
const AddBlogRouter = require("./routes/addBlog");
const GetBlogRouter = require("./routes/getBlog");
const ProfileBlogRouter = require("./routes/profile");
const deleteBlogRouter = require("./routes/deleteblogs");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(fileUpload())
app.use(express.static('upload'))



app.post("/login",LoginRouter)
app.post("/signup",SignupRouter)
app.post("/addBlog",AddBlogRouter)
app.post("/getimg",AddBlogRouter)
app.get("/getblogs",GetBlogRouter)
app.post("/profileblogs",ProfileBlogRouter)
app.get("/deleteblogs",deleteBlogRouter)





app.listen(3001,()=>{console.log("listening 3001");});