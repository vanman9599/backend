
const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findChildImmunizations,
 remove, 
 findAll,
 findById,
 
 
}

function findChildImmunizations(id){
    return db('child_immunizations')
    .where({ childId: id })
    .innerJoin('immunizations', 'child_immunizations.immunizationId', 'immunizations.id')
    .select('immunizations.name', 'child_immunizations.dateReceived', 'child_immunizations.location', 'child_immunizations.childId', 'child_immunizations.immunizationId', 'immunizations.name', 'immunizations.monthsAge', 'immunizations.description')
    .then(immunizations => {
        if(immunizations){
            return immunizations;
        }else{
            return null;
        }
    })
}


function insert(immunization){
    return db('immunizations')
    .insert(immunization)
    .then(immun => {
        if(immun){
            return immun;
        }else{
            return null;
        }
    })
}


function update(changes, id){
    return db('immunizations')
    .where({ id })
    .update(changes)
    .then(immun => {
        if(immun){
            return immun;
        }else{
            return null;
        }
    })
}


function findAll(){
    return db('immunizations')
    .orderBy('id')
    .then(staff => {
        if(staff){
            return staff;
        }else{
            return null;
        }
    })
}


function findById(id){
    return db('immunizations')
    .where({ id })
    .then(immun => {
        if(immun){
            return immun;
        }else{
            return null;
        }
    })
}

function remove(id){
    return db('immunizations')
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