import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../backendRoute'
import { SideUser } from './SideUser'

export const AllUsers = () => {

    const [allUsers, setallUsers] = useState([])

    async function fethUser(){
        try{
            let tempUsers = await axios.get(api.HOST + api.ALLUSERS,{
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                 },
                withCredentials : true,
            })
            console.log(tempUsers.data)
            setallUsers(tempUsers.data)
        }catch(err){
            console.log("error fetching all users")
        }
    }

    useEffect(() => {
        fethUser()
    }, [])

    return (
        <div>
             {allUsers ? allUsers.map(user => <SideUser key={user.uid} user={user} status={'sendRequest'} />) : <></>}
        </div>
    )
}
