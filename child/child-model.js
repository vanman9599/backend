const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findById,
 remove, 
 
}

function insert(child){
    return db('child_detail')
    .insert(child)
    .then(ch => {
        if(ch){
            return ch;
        }else{
            return null
        }
    })
}

function findById(id){
    return db('child_detail')
    .where({ id })
    .then(child => {
        if(child){
            return child;
        }else{
            return null;
        }
    })
}

function remove(id){
    return db('child_detail')
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

function update(changes, id){
    return db('child_detail')
    .where({ id })
    .update(changes)
    .then(child => {
        if(child){
            return child;
        }else{
            return null;
        }
    })
}