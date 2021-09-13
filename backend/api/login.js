import { Router } from "express";
import passport from "passport";

const loginRoute = Router()

loginRoute.post("/", passport.authenticate('local'),(req,res)=>{
    res.json({
        name : req.user.name,
        email : req.user.email
    })
})

loginRoute.get("/user",(req,res)=>{
    if(req.isAuthenticated()){
        res.status(200).json(req.user)
    }else res.sendStatus(404)
})


export default loginRoute