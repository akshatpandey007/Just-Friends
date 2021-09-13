import React from 'react'

export const AddPost = () => {
    return (
        <div>
            <div className="modal shown fade" id="addPost" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Post</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                <div className="modal-body">
                
                    <div className="mb-3">
                        <textarea type="text-area" style={{resize:'none'}} className="form-control" id="textArea" placeholder="Write about something... " rows="4" cols="50"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Discard</button>
                    <button type="submit" className="btn btn-dark" data-bs-dismiss="modal">Post</button>
                </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
