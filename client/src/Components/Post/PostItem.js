import React from 'react'
import { PostBody } from './PostBody'
import { PostFooter } from './PostFooter'
import { PostHeader } from './PostHeader'

export const PostItem = ({post}) => {
    return (
        <div className="card p-3 m-3" >
            <PostHeader title={post.title} DOC={post.DOC} />
            <PostBody data={post.data} />
            <PostFooter likes={post.likes} />
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