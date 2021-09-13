import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { api } from '../backendRoute';
import { PostItem } from './Post/PostItem'

export const Posts = () => {

    
    const [posts, setposts] = useState([])

    useEffect(() => {

        (async function(){
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                },
                withCredentials : true
              };
              try{
                
                let response = await axios.get(api.HOST + api.POSTS, axiosConfig)
                let pts = []
                response.data.map(r => {
                    let temp_post ={
                        postId : r.postId,
                        uid : r.uid,
                        title : r.heading,
                        data : r.content,
                        likes : r.likes,
                        DOC : r.creationDate
                    }
                    pts = [...pts,temp_post]
                })
                console.log("pts",pts)
                setposts(pts)
              }catch(err){

              }
        })();
    }, [])


    

    return (
        <div className="container" style={{width:'80%'}}>
            {posts.length===0 ? <p className="text-center text-muted">No new posts to display</p> : "" }
            {posts && posts.map(post => <PostItem key={post.postId} post={post}/> )}
        </div>
    )
}

/**
  post:
    title //header
    data //body
    image //body
    creation date(DOC) //header 
    //footer
    number of likes (Likes)
    number of Comments(CommentCount)
    list of comments(comments) : [comments]
 */