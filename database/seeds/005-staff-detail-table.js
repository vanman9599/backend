
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('staff_detail').del()
    .then(function () {
      // Inserts seed entries
      return knex('staff_detail').insert([
        {userId: 3, firstName: 'Jorge', lastName: 'Gonzalez', title: 'Office Manager', providerId: 2},
        {userId: 4, firstName: 'Tonya', lastName: 'Hardy', title: 'LPN', providerId: 2 }
        
      ]);
    });
};
