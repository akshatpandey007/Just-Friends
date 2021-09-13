import { Strategy as LocalStratergy} from 'passport-local'
import UserModel from '../models/UsersModel.js'



export const initialize =  (passport)=>{

    const authenticateUser = async (email, password,done)=>{
        console.log("Authenticating user...")

        try{
            await UserModel.getUserByEmail(email, (err,data)=>{
                if(err || !data){
                    console.log('authentication : No user with this email...')
                    return done(null,null,{message : "No user with this email found"})
                }else{
                    let user = data[0]
                    if(user.password === password){
                        const userInfo = {
                            id : user.uid,
                            name : user.name,
                            email : user.email
                        }
                        return done(null,userInfo)
                    }else {
                        console.log('authentication : Password Incorrect...')
                        return done(null,false, {message : "Password Incorrect..."})
                    }
                }
            })
        }catch(err){
            done(true,null);
        }
    }

    passport.use(new LocalStratergy({ usernameField : 'email',passwordField : 'password'},authenticateUser))

    //serialize user runs at the time of authentication/login it tells what to store in sessionID
    passport.serializeUser((user,done)=>{
        console.log('Serializing...')
        done(null,user.id)
    })

    //deserialize funtions runs at every function call when we need to get full user details 
    passport.deserializeUser((id,done)=>{
        console.log("Deserializing...")
        let user = UserModel.getUserById(id,(err,data)=>{
            if(err){
                done(err,null)
            }else {
                done(null,data)
            }
        })
    })
}
