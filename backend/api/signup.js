import { Router } from "express";
import { addUserToDB} from "../controllers/UserController.js";
import { getUserByEmailUtil } from "../controllers/UserUtils.js";


const signupRoute = Router()

signupRoute.post("/", async (req,res)=>{
    let userFound = await getUserByEmailUtil(req.body.email)
    if(userFound){
        res.status(409).json({message : 'User already exists...'})
    }else addUserToDB(req,res)
})

export default signupRoute