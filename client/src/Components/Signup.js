import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { api } from '../backendRoute'
import { useAuthUser } from '../Context'


export const SignUp = () => {
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setpassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const [isPasswordSame, setIsPasswordSame] = useState(true);
    const[user,updateUser] = useAuthUser()
    const history = useHistory()

    useEffect(() => {
        setIsPasswordSame(confirm_password.length===0 || password === confirm_password)
    }, [password, confirm_password])

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

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        if(!isPasswordSame) return;
        console.log("signing up...")
        let userCredentials = {
            name,
            email,
            password,
        }
        try{
           let res =  await axios.post(api.HOST + api.SIGNUP, userCredentials, {withCredentials : true})
           if(res.status === 200){
            if(window.confirm("Signup successful , LogIn !!")){
                history.push("/login")
            }
           }
        }catch(err){
           if(window.confirm("User alredy registered, LogIn !!")){
               history.push("/login")
           }
        }
        
    }


    return (
        <div className="container my-5" style={{maxWidth:'450px'}}>
            <form onSubmit = {onSubmitHandler}>
                <div className="form-group m-3">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"  value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" value={confirm_password} onChange={(e)=>setConfirm_password(e.target.value)}className="form-control" id="exampleInputPassword2" placeholder="Password" />
                </div>
                <div className="m-3">{!isPasswordSame ? <small className="text-danger">Passwords do not match</small>:
                <small className="text-danger invisible">Passwords do not match</small>}</div>
                <div className="text-center"><button type="submit" className="btn btn-dark">Submit</button></div>
                </form>
        </div>
    )
}
