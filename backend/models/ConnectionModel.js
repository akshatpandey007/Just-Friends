import db from "./dbConfig.js"

const table = process.env.DB_CONNECTION_TABLE || 'connections'


class ConnectionModel {
    constructor(uid,friends,countFriends){
        this.uid = uid;
        this.friends = friends;
        this.countFriends = countFriends;
    }

    static initConnectionFor(uid,done){
        let query = `INSERT INTO ${table} (uid) VALUES (${uid})`
        db.query(query,(err,data)=>{done(err,data)})
    }
    static addFriends(uid,friendId,done){
        let query = `SELECT * FROM ${table} WHERE uid = ${uid}`
        db.query(query,(err,data)=>{
            if(err || data.length === 0 || !data){
                return done(err,null)
            }
            let friends = data[0]['friends'];
            friends = friends ? [...friends.split(','),Number(friendId)] : [friendId]

            let query2 = `UPDATE ${table} SET friends = "${friends}", countfriends = ${data[0]['countfriends']+1} WHERE UID= ${uid}`
            db.query(query2, (err2,data2)=>{done(err2,data2)})
        })
    }

    static getAllFriends(uid,done){
        let query = `SELECT * FROM ${table} WHERE UID=${uid}`
        db.query(query,(err,data)=>{
            if(err)
                return done(err,null)
            else {
                let temp = data[0]['friends']
                temp = temp ? temp.split(',') : []
                return done(null,temp)
            }
        })
    }

    static removeFriends(uid,friendId,done){
        // TODO
    }
}

export default ConnectionModel