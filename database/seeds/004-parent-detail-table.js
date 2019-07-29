
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parent_detail').del()
    .then(function () {
      // Inserts seed entries
      return knex('parent_detail').insert([
        {userId: 1, firstName: 'Marcy', lastName: 'Oniel', address1: '123 Someplace Rd',
             city: 'Las Vegas', zip: '89102', state: 'NV', phone: '(702) 209-9234'},
        {userId: 2, firstName: 'Laura', lastName: 'Davis', address1: '9654 Common Pl.',
             city: 'Hialeah', zip: '33014', state: 'FL', phone: '(305) 823-2649'}
        
        
      ]);
    });
};
