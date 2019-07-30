
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('immunization_schedule').del()
    .then(function () {
      // Inserts seed immunization_scheduleentries
      return knex('immunization_schedule').insert([
        {immunizationId: 1, monthsAge: 0, dose: 1},
        {immunizationId: 1, monthsAge: 2, dose: 2},
        {immunizationId: 1, monthsAge: 12, dose: 3},
        {immunizationId: 2, monthsAge: 2, dose: 1},
        {immunizationId: 2, monthsAge: 4, dose: 2},
        {immunizationId: 3, monthsAge: 2, dose: 1},
        {immunizationId: 3, monthsAge: 4, dose: 2},
        {immunizationId: 3, monthsAge: 6, dose: 3},
        {immunizationId: 3, monthsAge: 15, dose: 4},
        {immunizationId: 3, monthsAge: 48, dose: 5},
        {immunizationId: 4, monthsAge: 2, dose: 1},
        {immunizationId: 4, monthsAge: 4, dose: 2},
        {immunizationId: 4, monthsAge: 2, dose: 1},
        {immunizationId: 5, monthsAge: 4, dose: 2},
        {immunizationId: 5, monthsAge: 6, dose: 3},
        {immunizationId: 5, monthsAge: 15, dose: 4},
        {immunizationId: 6, monthsAge: 2, dose: 1},
        {immunizationId: 6, monthsAge: 4, dose: 2},
        {immunizationId: 6, monthsAge: 12, dose: 3},
        {immunizationId: 6, monthsAge: 48, dose: 4},
        {immunizationId: 7, monthsAge: 12, dose: 1},
        {immunizationId: 7, monthsAge: 24, dose: 2},
        {immunizationId: 7, monthsAge: 36, dose: 3},
        {immunizationId: 7, monthsAge: 48, dose: 4},
        {immunizationId: 7, monthsAge: 60, dose: 5},
        {immunizationId: 7, monthsAge: 72, dose: 6},
        {immunizationId: 8, monthsAge: 12, dose: 1},
        {immunizationId: 8, monthsAge: 48, dose: 2},
        {immunizationId: 9, monthsAge: 12, dose: 1},
        {immunizationId: 9, monthsAge: 48, dose: 2},
        {immunizationId: 10, monthsAge: 12, dose: 1},
        {immunizationId: 10, monthsAge: 18, dose: 2},
        {immunizationId: 11, monthsAge: 144, dose: 2},
        {immunizationId: 11, monthsAge: 192, dose: 2},
        {immunizationId: 12, monthsAge: 144, dose: 1},
        {immunizationId: 13, monthsAge: 144, dose: 1},
        
      ]);
    });
};
