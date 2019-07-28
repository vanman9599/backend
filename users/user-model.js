const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find(role) {
  const query = db('users').select('id', 'username', 'role');

  query.where({ role });
 

  return query;
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}