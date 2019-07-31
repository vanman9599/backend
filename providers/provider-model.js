const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findById,
 remove, 
 insertStaff,
 findStaffById,
 removeStaff,
 updateStaff, 
 removeUser,
 getProvidersChildren,
 
}

function findById(id){
    return db('providers')
    .where({ id })
    .then(provider => {
        if(provider){
            return provider;
        }else{
            return null;
        }
    })
}

function getProvidersChildren(id){
    return db('providers')
    .where({ id })
    .innerJoin('child_detail', 'providers.id',  'cd.providerId')
    .select('child_detail.firstName', 'child_detail.lastName', 'child_detail.DOB', 'child_detail.gender', 'child_detail.isPermission', 'child_detail.id', 'child_detail.comments')
    .then(provider => {
        if(provider){
            return provider;
        }else{
            return null;
        }
    })
}

function remove(id){
    return db('providers')
    .where({  id })
    .del()
    .then(num => {
       if(num){
           return num;
       }else{
           return null;
       }
    })
}

function insert(provider){
    return db('providers')
    .insert(provider, 'id')
    .then(prt => {
        if(prt){
            return prt;
        }else{
            return null;
        }
    })
}


function update(changes, id){
    return db('providers')
    .where({ id })
    .update(changes)
    .then(provider => {
        if(provider){
            return provider;
        }else{
            return null;
        }
    })
}
//Staff CRUD Operatiosn
function insertStaff(staff){
    return db('staff_detail')
    .insert(staff)
    .then(prt => {
        if(prt){
            return prt;
        }else{
            return null;
        }
    })
}


function findStaffById(id){
    return db('staff_detail')
    .where({ userId: id })
    .then(staff => {
        if(staff){
            return staff;
        }else{
            return null;
        }
    })
}

function removeStaff(id){
    return db('staff_detail')
    .where({  userId: id })
    .del()
    .then(num => {
       if(num){
           return num;
       }else{
           return null;
       }
    })
}

function updateStaff(changes, id){
    return db('staff_detail')
    .where({ id })
    .update(changes)
    .then(staff => {
        if(staff){
            return staff;
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