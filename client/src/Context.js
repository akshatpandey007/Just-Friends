import axios from 'axios';
import React,{useState, useContext} from 'react'
import { api } from './backendRoute';

const CurrUserContext = React.createContext([null,()=>{}]);


export function useAuthUser(){
    return useContext(CurrUserContext);

}
async function loginUser(userCredentials){
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        withCredentials : true
      };

    try{
        let res = await axios.post(api.HOST + api.LOGIN,userCredentials, axiosConfig)
        if(res.status === 200){
            localStorage.setItem('user',JSON.stringify(res.data))
            return res.data;
        }else {
            return null;
        }
    }catch(err){
        return null;
    }
}


export const AuthProvider = ( {children} ) =>{
    const [user, setUser] = useState(null)

    const updateUser = async (userCredentials = null)=>{
        let tempUser=null;
        try{
            if(userCredentials){
                tempUser = await loginUser(userCredentials)
                setUser(tempUser)
            }else{
                tempUser = localStorage.getItem('user') ?  JSON.parse(localStorage.getItem('user')) : null;
                if(!tempUser){
                    tempUser = await axios.get(api.HOST + api.USER,{withCredentials : true})
                    localStorage.setItem('user',JSON.stringify(tempUser))
                }
                console.log("tenpuser",tempUser)
                setUser(tempUser)
            }
            return tempUser
        }catch(err){
            setUser(null)
            return null
        }
    }

    return (
        <CurrUserContext.Provider value={[user,updateUser]} >
            {children}
        </CurrUserContext.Provider>
    );
}

