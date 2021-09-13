import  { Router } from "express"
import { getAllUsers } from "../controllers/UserController.js"


const allUsersRoute = Router()

allUsersRoute.get("/",getAllUsers)

export default allUsersRoute