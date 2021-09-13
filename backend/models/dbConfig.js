import mysql from 'mysql' 

const {
    DB,
    DB_PORT,
    HOST,
    DB_USER,
    DB_PASS,
 } = process.env;

const db = mysql.createPool({
    host : '127.0.0.1',
    port : '3333',
    user : 'root',
    password : 'password',
    database : 'justfriends'
})


export default db