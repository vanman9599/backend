
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {name: 'Desert Pediatricians'},
        {name: 'Magic Pediatricians'},
        {name: 'The Clinic'}
      ]);
    });
};
