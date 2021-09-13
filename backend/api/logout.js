import { Router } from "express";

const logoutRoute = Router()

logoutRoute.get("/",(req,res)=>{
   if(req.isAuthenticated()){
       console.log("logging outdfds...",req.isAuthenticated())
       req.logOut();
       res.sendStatus(200)
   }
})

export default logoutRoute