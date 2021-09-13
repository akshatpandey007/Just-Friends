import axios from 'axios';
import React, {useState} from 'react'
import { api } from '../../backendRoute';

export const AddPost = ({userId}) => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

    async function addPost(e){
        e.preventDefault();
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            },
            withCredentials : true
          };

          let post = {
              uid : 17,
              title,
              content
          }
        try{
            let res = await axios.post(api.HOST+api.POSTS,post,axiosConfig)
    
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="modal shown fade" id="addPost" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Post</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={(e) => addPost(e)}>
                <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="title" >Title</label>
                        <input type="text" className="form-control" value ={title} onChange= {(e)=> setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <textarea type="text-area" value={content} onChange={(e)=> setContent(e.target.value)} style={{resize:'none'}} className="form-control" id="textArea" placeholder="Write about something... " rows="4" cols="50"/>
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
