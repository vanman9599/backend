
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('child_immunizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('child_immunizations').insert([
        {childId: 1, dateReceived: '2018-03-21', location: 'The Clinic', immunizationId: 1},
        {childId: 1, dateReceived: '2018-06-22', location: 'The Clinic', immunizationId: 4},
        {childId: 2, dateReceived: '2018-03-21', location: 'The Clinic', immunizationId: 1},
        {childId: 2, dateReceived: '2018-05-22', location: 'The Clinic', immunizationId:  4},
        {childId: 3, dateReceived: '2018-03-21', location: 'The Clinic', immunizationId: 1},
        {childId: 4, dateReceived: '2018-09-22', location: 'The Clinic', immunizationId: 1}

      ]);
    });
};
