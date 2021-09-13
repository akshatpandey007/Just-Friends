import UserModel from "../models/UsersModel.js";


export async function addUserToDB(req,res){
  await UserModel.addUserToDB({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
   }, (err,data)=>{
       if(err){
           res.json({message : err})
       }else{
           console.log("USER ADDED SUCCESSFULLY!!")
           res.json(data);
       }
   })
}

export function getUserByEmail(req,res){
    UserModel.getUserByEmail(req.body.email,(err,data)=>{
        if(err){
            res.json(err)
        }else {
            console.log("USER FOUND SUCCESSFULLY!!")
            res.json(data)
        }
    })
    //next( )
}

export function getUserById(req,res){
    UserModel.getUserById(req.body.id,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            console.log("FOUND USER BY ID")
            res.json(data)
        }
    })
    //next()
}

export function getAllUsers(req,res){
    UserModel.getAll((err,data)=>{
        if(err){
            res.json(err)
        }else{
            console.log("GOT ALL THE USERs")
            res.json(data)
        }
    })
    //next()
}

export function removeUser(req,res){
    UserModel.removeUser(req.body.id,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            console.log("User REMOVED")
            res.json(data)
        }
    })
   // next()
}