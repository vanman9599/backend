const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findById,
 remove, 
 removeUser,
 findChildren,
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
    .join('users as u','pd.userId', '=', 'u.id' )
    .select('u.username', 'u.email', 'pd.firstName', 
            'pd.lastName', 'pd.address1','pd.address2',  'pd.zip', 
            'pd.state', 'pd.city', 'pd.phone', 'pd.comments', 'pd.userId')
    .then(parent => {
        if(parent){
            return parent;
        }else{
            return null;
        }
    })
}
// firstName: "baby", 
// lastName: "johnson", 
// parentId: 1, 
// isPermission: false,
// comments: "comments go here", 
// DOB: "2019-02-31" *yyyy-mm-dd*,

function findChildren(id){
    //send in parentId as id
    return db('child_detail as cd')
    .where({ parentId: id })
    .join('parent_detail as pd', 'cd.parentId', '=', 'pd.id')
    .join('providers as p', 'p.id', '=', 'cd.providerid')
    .select('p.name as providerName', 'cd.firstName', 'cd.lastName', 'cd.isPermission', 'cd.comments', 'cd.DOB', 'cd.gender')
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

//sends

function getParentId(userId){
    return db('parent_detail')
    .where({ userId: userId })
    .select('id')
}
function update(changes, id){
    parentId = getParentId(id);
    return db('parent_detail')
    .where({ userId: parentId })
    .update(changes)
    .then(parent => {
        if(parent){
            return parent;
        }else{
            return null;
        }
    })
}
