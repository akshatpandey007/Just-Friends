import React from 'react'
import { PostItem } from './Post/PostItem'

export const Posts = () => {

    let posts = [
        {
            title : "First Post",
            data : "This is my post data",
            image : null,
            DOC : "23-32-23",
            likes : ['rajat','sumit'],
            comments : ['rajat-hi'],
            CommentCount: 4,
        },
        {
            title : "Second Post",
            data : "This is my post data",
            image : null,
            DOC : "23-32-23",
            likes : ['rajat','sumit'],
            comments : ['rajat-hi'],
            CommentCount: 4,

        },
         
    ]

    return (
        <div className="container" style={{width:'80%'}}>
            {posts.length===0 ? <p className="text-center text-muted">No new posts to display</p> : "" }
            {posts.map(post => <PostItem post={post}/> )}
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