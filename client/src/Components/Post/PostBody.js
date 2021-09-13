import React from 'react'

export const PostBody = ({data,image}) => {
    return (
        <div className="container">
            <div>{data}</div>
            {image ? <div>{image}</div> : ""}
        </div>
    )
}
