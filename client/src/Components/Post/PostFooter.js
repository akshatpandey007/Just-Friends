import React,{useState,useEffect} from 'react'
import '../../styles/post.css'

export const PostFooter = ({likes,CommentCount}) => {
    let likeIconOption = ["bi bi-suit-heart","bi bi-suit-heart-fill text-danger"];
    const [likeStatus, setlikeStatus] = useState(false)
    const [likeIcon, setLikeIcon] = useState(likeIconOption[likeStatus])
    useEffect(() => {
        setLikeIcon(likeIconOption[likeStatus ? 1 : 0])
    }, [likeStatus])


    return (
        <div className="card mt-3 d-flex flex-row justify-content-between p-2">
           <div className="d-inline-block"> <i className={likeIcon} onClick={(e) =>setlikeStatus(!likeStatus)}></i><span className="p-2">{likes.length}</span></div>
           <div className="d-inline-block"> <i className="bi bi-card-text"></i> <span className="p-2">{CommentCount}</span></div>
        </div>
    )
}
