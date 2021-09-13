import { Router } from "express";
import { addUserToDB, getUserByEmail, getUserById, getAllUsers, removeUser } from "../controllers/UserController.js";
import ConnectionModel from "../models/ConnectionModel.js";
import UserModel from "../models/UsersModel.js";


const testRouter = Router();

testRouter.post('/addUser',addUserToDB)

testRouter.post('/findByEmail',getUserByEmail)

testRouter.post('/findById', getUserById)

testRouter.get('/getAllUsers',getAllUsers)

testRouter.get('/getallfriends',(req,res)=>{
    UserModel.getUserByEmail(req.body.email,(err,data)=>{
        if(err) res.json(err)
        else{
            let uid = data[0]['uid']
            ConnectionModel.getAllFriends(uid,(err,data)=>{
                if(err) res.json(err)
                else res.json(data)
            })
        }
    })
})

testRouter.post('/addfriends',(req,res)=>{
    let email = req.body.email
    UserModel.getUserByEmail(email,(err,data)=>{
        if(err || data.length === 0 || !data){
            res.json(err)
        }else{
           let uid =  data[0]['uid']
           ConnectionModel.addFriends(uid,req.body.friendId,(err,data)=>{
                if(err) res.json(err)
                else res.json(data)
           })
        }
    })
})

export default testRouter