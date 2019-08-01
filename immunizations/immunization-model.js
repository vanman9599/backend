
const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findChildImmunizations,
 remove, 
 findAll,
 findById,
 findImmunizationsTaken,
 findMissingImmunizations, 
 getAllImmunizationIds, 
 insertImmunization, 
 removeChildImmunizations,
 
 
}

function findImmunizationsTaken(id){
    return db('child_immunizations')
    .where({ childId: id })
    .join('immunizations', 'child_immunizations.ImmunizationId', '=', 'immunizations.id' )
    .orderBy('immunizations.monthsAge', 'child_immunizations.dose')
}

// select distinct i.name, i.monthsAge from immunizations i, child_immunizations ci
// where ci.childId = 1
// AND i.id NOT IN (select immunizationId from child_immunizations)

function getAllImmunizationIds(id){
    return db('child_immunizations')
    .where( { childId: id }).select('immunizationId')
}

function findMissingImmunizations(id){
    const query = getAllImmunizationIds(id);
    return db('immunizations')
    .whereNotIn('id', query)
    
    
}

// function getAllImmunizationIds(){
//     return db('immunizations')
//     .select('id')
// }

// function findMissingImmunizations(id){
//     const query = getAllImmunizationIds(id);
//     return db('child_immunizations')
//     .whereNotIn('immunizationId', query)
    
    
// }



function findImmunizations(){
    return db('immunizations')
    
    
}
 
function findChildImmunizations(id){
    return db('child_immunizations')
    .where({ childId: id })
    .join('immunizations', 'child_immunizations.immunizationId', '=', 'immunizations.id')
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
    .insert(immunization, 'id')
    .then(immun => {
        if(immun){
            return immun;
        }else{
            return null;
        }
    })
}


function update(changes, id){
    return db('child_immunizations')
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

function removeChildImmunizations(id){
    return db('child_immunizations')
    .where({ childId: id })
    .del()
    .then(num=>{
        if(num){
            return num;
        }else{
            return null;
        }
    })
}
function insertImmunization(immunization){
    return db('child_immunizations')
    .insert(immunization, 'id')
    .then(immun => {
        if(immun){
            return immun;
        }else{
            return null;
        }
    })
}
