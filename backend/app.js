import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import passport from 'passport'
import {initialize as passportInit} from "./config/passportConfig.js"
import sessions from 'express-session'

import cluster from 'cluster'
import os from 'os'
import portfinder from 'portfinder'


import loginRoute from "./api/login.js"
import logoutRoute from "./api/logout.js"
import signupRoute from './api/signup.js'
import allUsersRoute from './api/getallusers.js'



dotenv.config({ path : './config/config.env' })


const app = express()

if(process.env.ENV == 'development'){
    app.use(morgan('dev'))
}

var port = process.env.PORT || 4001
var portSpan = 999

portfinder.getPort({
    port,
    stopPort : port + portSpan
},(err,openPort)=>{
    if(err) throw err
    port = openPort
})



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

const cpus = os.cpus()

if(cluster.isMaster){
    console.log("Primary cluster running")
    for(let i=0;i<cpus.length;i++){
        cluster.fork()
    }

    cluster.on('exit',(worker,code,data)=>{
        console.log(`worker on port ${worker.process.pid} died`)
        cluster.fork()
    })

}else {
    app.listen(port,err =>{
        if(err)
            throw err
        console.log(`Server is running at port ${port} with process ${process.pid}`)
    })
}


