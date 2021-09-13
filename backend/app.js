import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import passport from 'passport'
import {initialize as passportInit} from "./config/passportConfig.js"
import sessions from 'express-session'

import loginRoute from "./api/login.js"
import logoutRoute from "./api/logout.js"
import signupRoute from './api/signup.js'
import testRouter from './api/test.js'
import allUsersRoute from './api/getallusers.js'



dotenv.config({ path : './config/config.env' })


const app = express()

if(process.env.ENV == 'development'){
    app.use(morgan('dev'))
}

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin:'http://localhost:3000', 
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials:true,            
    optionSuccessStatus:200,
}))

passportInit(passport)

app.use(sessions({
    secret : process.env.SESSION_SECRET || 'secret',
    resave : false,
    saveUninitialized : false
}))

app.use(passport.initialize())
app.use(passport.session())

//routes
app.use("/signup",signupRoute)
app.use("/login",loginRoute)
app.use("/logout",logoutRoute)
app.use("/getallusers",allUsersRoute)
app.use("/test", testRouter)

app.listen(port,err =>{
    if(err)
        throw err
    console.log(`Server is running at port ${port}`)
})
