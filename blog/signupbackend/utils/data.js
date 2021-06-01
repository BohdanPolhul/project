const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const config = require("config")
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const adminRegister = async (request, role, response) => {
    const collection = request.app.locals.collection;
    const hashedPassword =  bcrypt.hashSync(request.body.password, 10);
    const signedUpUser = {
        role:"admin",
        name:request.body.name,
        password:hashedPassword,
        date:new Date().toLocaleString('uk-UA')
        
    }
    collection.findOne({name:request.body.name},function(err, user){   
        if(err) return console.log(err);
        if(user){
            response.send({
                message:"Email зайнятий"
            })
        }else{
            collection.insertOne(signedUpUser,function (err,result){
                if(err){
                    console.log(err);
                    response.sendStatus(500);
                }
                response.send(signedUpUser)
            })
   
        }
    });
}
const adminAuth = async (req,role,res)=>{
    const collection = req.app.locals.collection;
    const {name, password} = req.body
    collection.findOne({name:name},function(err, user){ 
        if(err) return console.log(err);
        if(!user){
            return res.send({
                message:"User not found"
            })
        }
        if (user.role !== 'admin') {
            return res.status(403).json({
              message: "Please make sure you are logging in from the right portal.",
              success: false
            });
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return res.send({
                message:"Password invalid"
            })   
        }else{
            const token = jwt.sign({id: user._id}, "secret-key-for-my-task", {expiresIn: "1h"})
            res.json({
                token,
                admin: {
                    role:user.role,
                    id: user._id,
                    name: user.name,
                }
            })
        }
        
    });
}
const getAdminId = async (req,role,res)=>{
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, user){    
    const token = jwt.sign({id: user._id}, "secret-key-for-my-task", {expiresIn: "1h"})      
                res.send({
                    token,
                    user: {
                        id:user._id,
                        name:user.name,
                        date:user.date
                    }
                });        
    });
}
const getAdmin = async (req,role,res)=>{
    const collection = req.app.locals.collection;
    collection.find({role:"admin"},{ _id: 0 }).toArray()
    .then(admin => {
        res.send({
            admin
        })
    });
}

const postBlog = async (request, role, response) => {
    if(request.body.message==='') return  response.send({message:"Введіть повідомлення"});
    if(!request.body._id) return   response.sendStatus(500);;
    const collection = request.app.locals.collection;
    const TextMessage = {
        _id:String(request.body._id),
        role:role,
        message:request.body.message,
        date:new Date().toLocaleString('uk-UA')
    }
    collection.insertOne(TextMessage,function (err,result){
        if(err){
            console.log(err);
            response.sendStatus(500);
        }
        response.send(TextMessage)
        console.log(TextMessage)
    })
}
const getBlog = async (req,role,res)=>{
    const collection = req.app.locals.collection;
    collection.find({role:role},{ _id: 0 }).toArray()
    .then(blog => {
        res.send({
            blog
        })
    });
}
const deleteBlog = async (req,role,res)=>{
    const id =req.params.id;
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){         
        if(err) return console.log(err);    
        let user = result.value;
        res.send(user);
    });
}
const UpDateBlog = async (req,role,res) =>{
    if(!req.body) return res.sendStatus(400);
    const id = req.params.id;
    const message = req.body.message;
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {message: message}},
         {returnOriginal: true },function(err, result){
        if(err) return console.log(err);     
        const user = result.value;
        console.log(result)
        res.sendStatus(200);
    });
}
module.exports = {
    adminRegister,
    adminAuth,
    getAdminId,
    getAdmin,
    postBlog,
    getBlog,
    deleteBlog,
    UpDateBlog
}