import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { useAuthUser } from '../Context';
import '../styles/Home.css';
import { AllUsers } from './AllUsers';
import { AddPost } from './Post/AddPost';
import { Posts } from './Posts';

export const ProfileHome = () => {
    const [user,updateUser] = useAuthUser()
    let history = useHistory()

    useEffect(async () => {
        try{
            let tempUser = await updateUser()
            if(!tempUser){
                history.push("/login")
            }
        }catch(err){
            console.log("error")
        }
        
    }, [])

    return (
        <div className="container-fluid bg-red" style={{height:'100%'}}>
            <div className="row">
                <div className="col">
                    <div className="container text-center text-muted font-weight-bold m-3"> People You may know...</div>
                    <AllUsers />
                </div>
                <div className="col-6" style={{backgroundColor : 'rgb(240, 236, 233)'}}>
                   <Posts />
                </div>
                <div className="col">
                    <div className="floatingActionButton" data-bs-toggle="modal" data-bs-target="#addPost"> <span>+</span>
                </div>
                </div>
            </div>
            <AddPost />
        </div>
    )
}
