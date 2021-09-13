//temporary database
var users = [
    {
        id : 0,
        name : "Akshat Pandey",  
        email : "akshat.pandey880@gmail.com",
        password : "10rs",
    },
    {
        id : 1,
        name : "Sumit Khan",
        email : "sumitkhan@katua.com",
        password : "khan"
    },
    {
        id :2,
        name : "Chotu Chauhan",
        email : "dopaCC@gmail.com",
        password : "popeye"
    }
];

export function getUsers(){
    return users
}

export function addToDB(user){
     users = [...users,user]
}
export default users;

