# Just-Friends 

A Social Media app with simple features built with ReactJS, NodeJS, ExpressJs and MYSQL database and mainly to showcase the skills of backend design

## Features 
* New Users can be added
* Guests can login 
* Users can see all other Users
* Users can send Friend Requests
* Users can accept Request
* Users can remove sent Request
* Users can Post
* Users can see Post of Others
* Users can logOut of the system

## Screenshots of Project

![1](https://github.com/akshatpandey007/Just-Friends/blob/main/img/1.png) ![2](https://github.com/akshatpandey007/Just-Friends/blob/main/img/2.png) ![3](https://github.com/akshatpandey007/Just-Friends/blob/main/img/3.png)

![4](https://github.com/akshatpandey007/Just-Friends/blob/main/img/4.png) ![5](https://github.com/akshatpandey007/Just-Friends/blob/main/img/5.png) ![6](https://github.com/akshatpandey007/Just-Friends/blob/main/img/6.png)

![7](https://github.com/akshatpandey007/Just-Friends/blob/main/img/7.png) ![8](https://github.com/akshatpandey007/Just-Friends/blob/main/img/8.PNG) ![9](https://github.com/akshatpandey007/Just-Friends/blob/main/img/8.PNG)

Database of Project
![db](https://github.com/akshatpandey007/Just-Friends/blob/main/img/db.jpg)

## Dependencies Used

### Nodemon

  Nodemon will start the node server and watch the changes, if any change occurs in the code Nodemon will automatically restart the server. A great dev-dependency.

### PortFinder

```bash
  npm install portfinder
```

  A Tool to find free ports on the machine. Don't have to manually assign the Port to run the server

```javascript
  import portfinder from 'portfinder'
  
  let port = 3000
  let portSpan = 999
  
  portfinder.getPort({
    port : port,
    stopPort : port + portSpan
  },(err,freePort)=>{
    if(err) throw err
    port = freePort
  });
  ```
  
  ### Node Clusters
  By default Node.js runs in a single process. But for a multicore cpu we want to distribute the workload to different Processes. This can be achieved by the Use of Node Clusters package.
  It Divides the request into multiple processes so that each process can use different processor to run simultaneously. It creates a Master Process and other worker Processes, requests are handled by worker processes whereas Master process is responsible for creating and managing worker processes.
  In case if master processor fails any other processor can take place of the master.
  
  This increases the availability of the system and increases the overall speed and performance of the system. Hence, makes the system scalable.
  
  ```javascript
  import cluster from 'cluster'
  import os from 'os'
  

  const cpus = os.cpus()
  
  // for master process
  if(cluster.isMaster){
    for(let i=0;i<cpus.length;i++){
      cluster.fork() // creating child processes
    }
    
    cluster.on('exit' , (worker,code,data) =>{
      console.log(`worker process ${worker.process.pid} died`)
      cluster.fork()
    })
    
  }else{
    // For worker processes
    // listen to server request
  }
 
  ```
  
  Below are the results of loadtest Npm module:
   1000 requests were made with maximum of 100 at a time and first result is with clustering and another without using clusters and following result came
   
   i) Using Clustering
  
  ![Result with cluster](https://github.com/akshatpandey007/Just-Friends/blob/main/img/with_cluster.png)
  
  ii) Without Using Clustering
  
  ![Result without cluster](https://github.com/akshatpandey007/Just-Friends/blob/main/img/with_no_cluster.png)
  
  
  ### Axios
   It is a Promise based HTTP client which is used to send API requests to the server from frontEnd.
   
   ```javascript
       let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        // allows to send cookies with the request
        withCredentials : true
      };

      axios.get(API_URL,axiosConfig);
   
   ```
   
  ### Morgan
  A Logger it is Use to watch for any API calls and logs the basic information about the API calls.
  
  ```javascript
    import morgan from 'morgan'
    app.use(morgan('dev'))
  ```
  
  Morgan logs
  ![logs](https://github.com/akshatpandey007/Just-Friends/blob/main/img/morgan.png)
  
 ### bcrypt 
 Bcrypt is use to encypt string with given strength. It is generally used to encrypt Password. 
 
 ```javascript
  import bcrypt from 'bcypt'
  bcrypt.hash(String,salt,(err,hash)=>{
    // Use hash here
  })
  
  // To compare hash
  bcrypt.compare(string_text,encrypted_string,(err,data)).then(res =>//...)
 ```
 
 ### MySQL Database Connectivity with pool connections
 
 This is a node.js driver for mysql. Also implemented the connection pool, it is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. Connection pools are used to enhance the performance of executing commands on a database.
 
 ```javascript
 let mysql = require('mysql');
 let pool  = mysql.createPool({
  connectionLimit : 50,         // The maximum number of connections to create at once. (Default: 10)
  queueLimit: 100,              // The maximum number of connection requests the pool will queue before returning an error from getConnection. (Default: 0)
  host : '127.0.0.1',           // The hostname of the database you are connecting to. (Default: localhost)
  port : 3306,                  // The port number to connect to. (Default: 3306)
  user : 'Akshat',               // The MySQL user to authenticate as.
  password : '',                // The password of that MySQL user.
  database : 'mysqldb',         // Name of the database to use for this connection.
});
 ```
 
 ### Passport and Passport-local
 Passport is authentication middleware for Express apps. It supports different Startergies like login with google, github, etc.
 
 Passport-local is a stratergy for passport to login locally without using any third party provider.
 
 ```javascript

import { Strategy as LocalStratergy} from 'passport-local'
import UserModel from '../models/UsersModel.js'



export const initialize =  (passport)=>{

    const authenticateUser = async (email, password,done)=>{
        console.log("Authenticating user...")

        try{
              // Search for User In database and Match password
              return done(null,user)
           }
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
        // get User Info from the User Serialized and stored in SessionID
    })
}
 ```
 
 
 
 
 
 
 
 
 
 
  
  
  
