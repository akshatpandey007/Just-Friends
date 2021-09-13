import React from 'react'
import '../../styles/post.css'

export const PostHeader = ({title,DOC}) => {
    let doc = DOC && DOC.split("T")[0]
    return (
        <div className="Post-text d-inline-flex justify-content-between">
            <h2 className="d-inline-block">{title}</h2>
            <small className="text-muted">{doc}</small>
        </div>
    )
}
