
import db from "./dbConfig.js";

const table = 'posts' || process.env.DB_POSTS_TABLE


export default class PostModel {

    static getAll(done){
        let query = `SELECT * FROM ${table}`
        db.query(query,(err,data)=>{
            if(err) done(err,null)
            else done(null,data)
        })
    }

    static addPost(userId,post,done){
        let query = `INSERT INTO ${table} (UID,HEADING,CONTENT) VALUES (${userId},"${post.title}","${post.content}")`
        console.log(query)
        db.query(query, (err,data)=>{
            if(err){
                console.log("databaseError : post can not be added")
                return done(err,null)
            }
            return done(null,data)
        })

    }

}