const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findById,
 remove, 
 removeUser,
}
// {
//     username: "somone123" *required* (string), 
//     email: "someone@gmail.com" , 
//     password: "49bndkge939nvkdlss9s938fj"  *required*, 
//     firstName: "mary" , *required* 
//     lastName: "Johnson",  *required* 
//     address1: "123 Baker St.",  *required*
//     address2: "apt 104", 
//     zip: "89103",  *required* 
//     state: "NV",  *required*
//     city: "Las Vegas",  *required* 
//     phone: "(702) 208-9232",  *required* 
//     comments: "some comments here" 
// }
function findById(id){
    return db('parent_detail as pd')
    .where({ userId: id })
    .join('users as u', 'u.id', '=', 'pd.userId')
    .select('u.username', 'u.email', 'u.id as userId', 'pd.firstName', 
            'pd.lastName', 'pd.address1','pd.address2',  'pd.zip', 
            'pd.state', 'pd.city', 'pd.phone', 'pd   .comments as comments')
    .then(parent => {
        if(parent){
            return parent;
        }else{
            return null;
        }
    })
}

function remove(id){
    return db('parent_detail')
    .where({ userId: id })
    .del()
    .then(num => {
       if(num){
           return num;
       }else{
           return null;
       }
    })
}

function removeUser(id){
    return db('users')
    .where({ id })
    .del()
    .then(num => {
        if(num){
            return num;
        }else{
            return null;
        }

    })
}

function insert(parent){
    return db('parent_detail')
    .insert(parent)
    .then(prt => {
        if(prt){
            return prt;
        }else{
            return null;
        }
    })
}
function update(changes, id){
    return db('parent_detail')
    .where({ userId: id })
    .update(changes)
    .then(parent => {
        if(parent){
            return parent;
        }else{
            return null;
        }
    })
}
