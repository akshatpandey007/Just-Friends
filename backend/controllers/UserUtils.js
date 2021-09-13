import UserModel from "../models/UsersModel.js";

export async function getUserByEmailUtil(email){
    await UserModel.getUserByEmail(email,(err,data)=>{
        if(err || data.length === 0 || !data){
            return null;
        }else {
            console.log(data[0])
            return data[0]
        };
    })
}

export  function getUserByIdUtil(id){
     UserModel.getUserById(id,(err,data)=>{
        if(err || data.length===0){
            return null
        }else return data[0]
    })
}