import db from "./dbConfig";

const table = process.env.DB_POSTS_TABLE


class PostModel {
    constructor(postid,uid,heading,content,likes,countLikes,creationDate){
        this.postid = postid;
        this.uid = uid;
        this.heading = heading;
        this.content = content;
        this.likes = likes;
        this.countLikes = countLikes;
        this.creationDate = creationDate;
    }

    static addPost(post,done){
        let query = `INSERT INTO ${table} (UID,HEADING,CONTENT) VALUES (${post.postid,post.heading,post.content})`
        db.query(query, (err,data)=>{
            if(err){
                console.log("databaseError : post can not be added")
                return done(err,null)
            }
            return done(null,data)
        })
    }

    static getAllPostByUser(id,done){ //sorted by email
        let query = `SELECT * FROM ${table} WHERE UID=${id} ORDER BY creationDate DESC`
        db.query(query, (err,data)=>{
            if(err){
                console.log("dataError : post not able to fetch...")
                return done(err,null);
            }
            return done(null,data)
        })
    }

    static removePosts(postid,done){
        let query = `DELETE FROM ${table} WHERE postid = ${postid}`
        db.query(query, (err,data)=>{
            if(err){
                console.log("dataError : remove post error")
                return done(err,null)
            }
            return done(null,data)
        })
    }
    
}

export default PostModel