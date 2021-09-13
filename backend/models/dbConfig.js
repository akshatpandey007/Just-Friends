import mysql from 'mysql' 

const {
    DB,
    DB_PORT,
    HOST,
    DB_USER,
    DB_PASS,
 } = process.env;

const db = mysql.createPool({
    host : HOST,
    port : DB_PORT,
    user : DB_USER,
    password : DB_PASS,
    database : DB
})


export default db
