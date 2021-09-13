import db from "./dbConfig.js";

const table =  'users'

class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static addUserToDB(user, done) {
        let query = `INSERT INTO ${table} (name,email,password) VALUES ("${user.name}","${user.email}","${user.password}")`
        db.query(query, (err,data)=>{
            if(err){
                return done(err,null)
            }else return done(null,data)
        })
    }

    static getUserByEmail(email, done) {
        let query = `SELECT * FROM ${table} WHERE EMAIL="${email}"`;
        db.query(query, (err, data) => {
            if (err) {
                return done(err, null);
            }
            return done(null, data);
        });
    }

    static getUserById(id, done) {
        let query = `SELECT * FROM ${table} WHERE UID= "${id}"`
        db.query(query, (err,data)=>{
            if(err){
                return done(err,null)
            }
            return done(null,data)
        })
    }

    static getAll(done){
        let query = `SELECT * FROM ${table}`
        db.query(query, (err,data)=>{
            if(err){
                return done(err,null);
            }
            return done(null,data)
        })
    }
    static removeUser(id, done) {
        let query = `DELETE FROM ${table} WHERE UID = "${id}"`
        db.query(query, (err,data)=>{
            if(err){
                return done(err,null)
            }
            return done(null,data)
        })
    }
}

export default UserModel