
const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findChildImmunizations,
 remove, 
 findAll,
 findById,
 findImmunizationsTaken,
 findMissingImmunizations
 
 
}

function findImmunizationsTaken(childId){
    return db('child_immunizations')
    .where({ childId: childId })
    .innerJoin('immunizations', 'child_immunizations.ImmunizationId', 'immunizations.id' )
    .orderBy('immunizations.monthsAge', 'child_immunizations.dose')
}

// select distinct i.name, i.monthsAge from immunizations i, child_immunizations ci
// where ci.childId = 1
// AND i.id NOT IN (select immunizationId from child_immunizations)

function findMissingImmunizations(childId){
    return db('child_immunizations as ci')
    .where({ childId: childId})
    .whereNotIn('immunizations.id' ,function(){
            this.select('immunizationId').from('child_immunizations')
        })
    
}

function findImmunizations(){
    return db('immunizations')
    
    
}

function findChildImmunizations(id){
    return db('child_immunizations')
    .where({ childId: id })
    .innerJoin('immunizations', 'child_immunizations.immunizationId', 'immunizations.id')
    .select('immunizations.name', 'immunizations.description', 'child_immunizations.dateReceived', 'child_immunizations.location', 'child_immunizations.childId', 'child_immunizations.immunizationId', 'immunizations.dose', 'immunizations.monthsAge')
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