var express = require('express');
var LoginRouter = express.Router();
// var bodyParser = require('body-parser')
const mysqlconnection = require("../connection");


LoginRouter.post("/login",async (req,res)=>{

    let email =req.body.email;
    let password =  req.body.password;
    console.log("inside Login")
    
    const scanOperation = async()=>{
        return new Promise((res,rej)=>{
            
            mysqlconnection.query("SELECT * FROM userinfo WHERE email = ? AND password = ?",[email,password],(err,result)=>{
                if(err){
                    rej(err)
                }else{
                    res(result)
                }
               
                
                // if(result){
                //     res.send(result);
                //     console.log("Checked");
                // }else
                // res.send({message: "No user found"})
            });
        })
    }
    res.status(200).json({
        data:await scanOperation()
    })

});




module.exports= LoginRouter