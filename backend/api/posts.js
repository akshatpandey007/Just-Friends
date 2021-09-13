// add post
// get all post


import { Router } from "express";
import PostModel from "../models/PostModel.js";



const postRoute = Router()

// add post by user
postRoute.post("/",(req,res)=>{
        let user = req.body.uid
        let post = {title : req.body.title, content : req.body.content}
        console.log(post)

        PostModel.addPost(user,post,(err,data)=>{
            res.status(200)
        })

})


// get all the posts 
postRoute.get("/",(req,res)=>{
    console.log("running this...")
    PostModel.getAll((err,data)=>{
        if(data){
            res.status(200).json(data)
        }
    });
})


//get all post by certain user with userId
// postRoute.get("/:userId",(req,res)=>{
//     let user = req.params.userId
//     if(req.isAuthenticated()){
//         PostModel.getAllPostByUser(user,(err,data)=>{
//             if(err) res.statusCode(500)
//             else  res.status(200).json(data)
//         })
//     }else res.statusCode(500)
// })


export default postRoute