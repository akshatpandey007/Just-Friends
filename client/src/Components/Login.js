import React,{useState,useEffect} from 'react'
import { useAuthUser } from '../Context';
import '../styles/Login.css'
import { useHistory } from "react-router-dom"



export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIncorrect, setpasswordIncorrect] = useState(false)
    let [authuser,updateUser] = useAuthUser()
    let history = useHistory();

    async function fetchData(){
        try{
            let tempUser = await updateUser();
            if(tempUser){
                history.push("/profilehome")
            }
        }catch(err){
            console.log("error in userfetching")
        }
       
    }

    useEffect(() => { fetchData() }, [])
   

    const onSubmitHandler= async (e)=>{
        e.preventDefault();
        try{
            let tempUser = {
                email,
                password
            }
            let resUser = await updateUser(tempUser)
            if(resUser){
                setpasswordIncorrect(false)
                history.push('/profilehome');
            }else{
                setpasswordIncorrect(true)
            }
        }
        catch(err){
            setpasswordIncorrect(true)
        }
    }

    return (
        <div className="container my-5" style={{maxWidth:'450px'}}>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                    {passwordIncorrect ? <small className="text-danger">Email or Password Incorrect*</small> : <small className="text-danger invisible">Password Incorrect*</small>}
                <div className="text-center my-3"><button type="submit" className="btn btn-dark">Submit</button> </div>
                </form>
        </div>
    )
}
