const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(()=> {
    let word = 'pass';
    const hash = bcrypt.hashSync(word, 10); // 2 ^ n
    password = hash;

    return knex('users').insert([
      {username: 'lovelymom', email: 'mom@gmail.com', password: password, role: 'parent'},
      {username: 'lady', email: 'someone@gmail.com', password: password, role: 'parent'},
      {username: 'user123', email: 'user123m@gmail.com', password: password, role: 'staff'},
      {username: 'staff123', email: 'staff123@gmail.com', password: password, role: 'staff'}
    ]);

  })
  // Inserts seed entries
     
    
}

