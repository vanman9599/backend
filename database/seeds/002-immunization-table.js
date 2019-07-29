
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('immunizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('immunizations').insert([
        { name: 'Hepatitis B (HepB) 1st Dose', monthsAge: 0},
        { name: 'Hepatitis B (HepB) 2nd Dose', monthsAge: 2},
        { name: 'Hepatitis B (HepB) 3rd Dose', monthsAge: 6}, 
        { name: 'Rotavirus (RV) 1st Dose', monthsAge: 2},
        { name: 'Rotavirus (RV1) 2nd Dose', monthsAge: 4},
        { name: 'Rotavirus (RV5) 3rd Dose', monthsAge: 6},
        { name: 'Diptheria, tetanus, & ancellular pertussis (DTap) 1st Dose', monthsAge: 2},
        { name: 'Diptheria, tetanus, & ancellular pertussis (DTap) 2nd Dose', monthsAge: 4},
        { name: 'Diptheria, tetanus, & ancellular pertussis (DTap) 3rd Dose', monthsAge: 6},
        { name: 'Diptheria, tetanus, & ancellular pertussis (DTap) 4th Dose', monthsAge: 15},
        { name: 'Haemophilus influezae type b (Hib) 1st Dose', monthsAge: 2},
        { name: 'Haemophilus influezae type b (Hib) 2nd Dose', monthsAge: 4},
        { name: 'Haemophilus influezae type b (Hib) 3rd Dose', monthsAge: 6},
        { name: 'Haemophilus influezae type b (Hib) 4th Dose', monthsAge: 15}, 
        { name: 'Pneumococcal conugate (PCV13) 1st Dose', monthsAge: 2},
        { name: 'Pneumococcal conugate (PCV13) 2nd Dose', monthsAge: 4},
        { name: 'Pneumococcal conugate (PCV13) 3rd Dose', monthsAge: 6},
        { name: 'Pneumococcal conugate (PCV13) 4th Dose', monthsAge: 15},
        { name: 'Inactivated poliovirus (IPV) 1st Dose', monthsAge: 2},
        { name: 'Inactivated poliovirus (IPV) 2nd Dose', monthsAge: 4},
        { name: 'Inactivated poliovirus (IPV) 3rd Dose', monthsAge: 9},
        { name: 'Influenza (IIV) Annual Vaccination', monthsAge: 6}, 
        
      ]);
    });
};
