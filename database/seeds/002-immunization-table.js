
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('immunizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('immunizations').insert([
        { description: 'Hepatitis B', name: 'HepB', dose: 1, monthsAge: 0},
        { description: 'Hepatitis B', name: 'HepB', dose: 2, monthsAge: 2},
        { description: 'Hepatitis B', name: 'HepB', dose: 3, monthsAge: 12}, 
        { description: 'Rotavirus', name: 'RV', dose: 1, monthsAge: 2},
        { description: 'Rotavirus RV1', name: 'RV', dose: 2, monthsAge: 4},
        { description: 'Rotavirus RV2', name: 'RV', dose: 3, monthsAge: 6},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', dose: 1, monthsAge: 2},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', dose: 2, monthsAge: 4},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', dose: 3, monthsAge: 6},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', dose: 4, monthsAge: 15},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', dose: 5, monthsAge: 48},
        { description: 'Haemophilus influezae type b', name: 'Hib', monthsAge: 2, dose: 1},
        { description: 'Haemophilus influezae type b', name: 'Hib', monthsAge: 4, dose: 2},
        { description: 'Haemophilus influezae type b', name: 'Hib', monthsAge: 6, dose: 3},
        { description: 'Haemophilus influezae type b', name: 'Hib', monthsAge: 15, dose: 4}, 
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 2, dose: 1},
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 4, dose: 2},
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 6, dose: 3},
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 15, dose: 4},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 2, dose: 1},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 4, dose: 2},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 9, dose: 3},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 48, dose: 3},
        { description: 'Influenza', name: 'IIV', monthsAge: 6, dose: 1}, 
        { description: 'Influenza', name: 'IIV', monthsAge: 18, dose: 2},
        { description: 'Influenza', name: 'IIV', monthsAge: 30, dose: 3},
        { description: 'Influenza', name: 'IIV', monthsAge: 42, dose: 4},
        { description: 'Influenza', name: 'IIV', monthsAge: 54, dose: 5},
        { description: 'Influenza', name: 'IIV', monthsAge: 66, dose: 6},
        { description: 'Influenza', name: 'IIV', monthsAge: 78, dose: 7},
        { description: 'Influenza', name: 'IIV', monthsAge: 90, dose: 8},
        { description: 'Measles, mumps, rubella', name: 'MMR', monthsAge: 12, dose: 1},
        { description: 'Measles, mumps, rubella', name: 'MMR', monthsAge: 48, dose: 2},
        { description: 'Varicella', name: 'VAR', monthsAge: 12, dose: 1},
        { description: 'Varicella', name: 'VAR', monthsAge: 48, dose: 2},
        { description: 'Hepatitis A', name: 'HepA', monthsAge: 12, dose: 1},
        { description: 'Hepatitis A', name: 'HepA', monthsAge: 18, dose: 2},
        { description: 'Meningococcal', name: 'MenACWY-D', monthsAge: 144, dose: 1},
        { description: 'Meningococcal', name: 'MenACWY-D', monthsAge: 192, dose: 2},
        { description: 'Tetanus, deptheria, and acellular pertusis', name: 'Tdap', monthsAge: 144, dose: 1},
        { description: 'Human papillomavirus', name: 'HPV', monthsAge: 144, dose: 1},
        
        
      ]);
    });
};
