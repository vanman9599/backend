const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findById,
};

function findById(id){
    return db('parent_detail')
    .where({ userId: id })
    .then(parent => {
        if(parent){
            return parent;
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
