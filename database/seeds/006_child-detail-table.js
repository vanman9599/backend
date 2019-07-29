
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('child_detail').del()
    .then(function () {
      // Inserts seed entries
      return knex('child_detail').insert([
        { firstName: 'Lucy', lastName: 'Oniel', isPermission: true, parentId: 1, DOB: '2018-01-17', providerId: 2},
        { firstName: 'Mario', lastName: 'Oniel', isPermission: false, parentId: 1, DOB: '2016-07-21', providerId: 2},
        { firstName: 'Jordan', lastName: 'Davis', isPermission: true, parentId: 2, DOB: '2018-01-17', providerId: 2 },
        { firstName: 'Laura', lastName: 'Davis', isPermission: false, parentId: 2, DOB: '2018-01-17', providerId: 2 }
      ]);
    });
};
