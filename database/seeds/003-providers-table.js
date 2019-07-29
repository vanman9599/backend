
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {name: 'Desert Pediatricians', address1: '4589 Turner Ave', address2: 'Suite 102', city:'Richmond', state: 'VA', zip: '23609', phone: '(800) 890-3943'},
        {name: 'Magic Pediatricians', address1: '4589 Brady St.', address2: 'Suite A', city:'Miami', state: 'FL', zip: '33014', phone: '(877) 555-6689'},
        {name: 'The Child Clinic', address1: '2367 Holly Blvd', address2: 'Suite 208', city:'Las Vegas', state: 'NV', zip: '89103', phone: '(725) 743-1543'},
      ]);
    });
};
